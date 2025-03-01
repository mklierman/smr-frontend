<script lang="ts">
  import { DeleteGuideDocument } from '$lib/generated';
  import GuideInfo from '$lib/components/guides/GuideInfo.svelte';
  import GuideAuthor from '$lib/components/guides/GuideAuthor.svelte';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';
  import Toast from '$lib/components/general/Toast.svelte';
  import { markdown } from '$lib/utils/markdown';
  import { base } from '$app/paths';
  import Dialog, { Title, Content as DialogContent } from '@smui/dialog';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import Button from '@smui/button';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: ({ guideId, guide } = data);

  const client = getContextClient();

  let errorMessage = '';
  let errorToast = false;

  $: canUserEdit = $user?.roles?.deleteContent || $user?.id === $guide?.data?.getGuide?.user?.id;

  const deleteDialogOpen = writable<boolean>(false);

  const deleteGuideFn = () => {
    client
      .mutation(DeleteGuideDocument, { guideId })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          errorMessage = 'Error deleting guide: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
          goto(base + '/guides');
        }
      });
  };

  $: if (!errorToast) {
    errorMessage = '';
  }
</script>

<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <MetaDescriptors description={$guide.data.getGuide.short_description} title={$guide.data.getGuide.name} />
  {/if}
</svelte:head>

{#if $guide.fetching}
  <p>Loading...</p>
{:else if $guide.error}
  <p>Oh no... {$guide.error.message}</p>
{:else if $guide.data.getGuide}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex flex-wrap h-auto justify-between items-center">
      <h1 class="text-4xl font-bold">{$guide.data.getGuide.name}</h1>

      <div>
        {#if canUserEdit}
          <Button variant="outlined" on:click={() => goto(base + '/guide/' + guideId + '/edit')}>Edit</Button>
          <Button variant="outlined" on:click={() => deleteDialogOpen.set(true)}>Delete</Button>
        {/if}
      </div>
    </div>
    <div class="grid grid-auto-max auto-cols-fr gap-4">
      <Card class="h-fit">
        <Content>
          <div class="markdown-content break-words">
            {#await markdown($guide.data.getGuide.guide) then guideRendered}
              <p>{@html guideRendered}</p>
            {/await}
          </div>
        </Content>
      </Card>
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <GuideInfo guide={$guide.data.getGuide} />
        <GuideAuthor author={$guide.data.getGuide.user} />
      </div>
    </div>
  </div>

  {#if canUserEdit}
    <Dialog bind:open={$deleteDialogOpen}>
      <Title>Delete Guide?</Title>
      <DialogContent>
        <div class="grid grid-flow-row gap-4">
          <span>Are you sure you wish to delete this guide</span>

          <Button variant="outlined" on:click={() => deleteDialogOpen.set(false)}>Cancel</Button>
          <Button variant="outlined" on:click={() => deleteGuideFn()}>Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  {/if}

  <Toast bind:running={errorToast}>
    <span>{errorMessage}</span>
  </Toast>
{:else}
  <!-- TODO Better 404 -->
  404
{/if}
