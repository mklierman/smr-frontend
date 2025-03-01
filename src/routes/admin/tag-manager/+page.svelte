<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Button, { Label, Icon } from '@smui/button';
  import Snackbar from '@smui/snackbar';
  import IconButton, { Icon as ButtonIcon } from '@smui/icon-button';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { noop } from 'svelte/internal';
  import { CreateTagDocument, DeleteTagDocument, GetTagsDocument, UpdateTagDocument } from '$lib/generated';
  import type { Tag } from '$lib/generated';

  const client = getContextClient();

  let tags: Tag[] = [];
  const panels = {};
  const nameFields = {};
  let snackbarTagChangeSavedText = '';
  let snackbarTagChangeSaved: Snackbar;
  let tagNegativeID = -1;

  const tagsQuery = queryStore({
    query: GetTagsDocument,
    client,
    variables: {}
  });

  $: tags = $tagsQuery.data?.getTags || [];

  function newTag() {
    if (!tags.find((tag) => tag.name == 'New Tag')) {
      const tag = { id: tagNegativeID--, name: 'New Tag' } as Tag;
      tags.push(tag);
      tags = tags;
      setTimeout(() => {
        panels[tag.id].setOpen(true);
        const field = nameFields[tag.id];
        field.focus();
        const input = field.getElement().querySelectorAll('input')[0] as HTMLInputElement;
        input.select();
      }, 0);
    } else {
      panels[tags[tags.length - 1].id].setOpen(true);
      nameFields[tags[tags.length - 1].id].focus();
    }
  }

  async function tagChange(tag: Tag) {
    // ignore "New Tag"
    if (tag.name == 'New Tag') {
      return;
    }

    let success = false;
    if (tag.id < 0) {
      // Create new tag & update tag.id with new DB id or re-fetch all tags
      try {
        const result = await client.mutation(CreateTagDocument, { tagName: tag.name }).toPromise();
        if (result.data) {
          tag.id = result.data.createTag.id;
          success = true;
        }
      } catch (err) {
        console.log(err);
      }
      if (!success) {
        snackbarTagChangeSavedText = `Failed to create Tag '${tag.name}'!`;
        snackbarTagChangeSaved.open();
        setTimeout(() => snackbarTagChangeSaved.close(), 2000);
        return;
      }
    } else {
      // Update existing tag
      try {
        success =
          (await client.mutation(UpdateTagDocument, { tagID: tag.id, tagName: tag.name }).toPromise()).data.updateTag !=
          null;
      } catch {
        noop();
      }
      if (!success) {
        snackbarTagChangeSavedText = `Failed to update Tag '${tag.name}'!`;
        snackbarTagChangeSaved.open();
        setTimeout(() => snackbarTagChangeSaved.close(), 2000);
        return;
      }
    }

    snackbarTagChangeSavedText = `Tag '${tag.name}' saved!`;
    snackbarTagChangeSaved.open();
    setTimeout(() => snackbarTagChangeSaved.close(), 2000);
  }

  async function deleteTag(tag: Tag) {
    if (tag.name != 'New Tag') {
      // Remove tag
      let success = false;
      try {
        const result = await client.mutation(DeleteTagDocument, { tagID: tag.id }).toPromise();
        success = result.data.deleteTag;
      } catch {
        success = false;
      }
      if (!success) {
        snackbarTagChangeSavedText = `Failed to remove Tag '${tag.name}'!`;
        snackbarTagChangeSaved.open();
        setTimeout(() => snackbarTagChangeSaved.close(), 2000);
        return;
      }
    }

    // Remove tag animation
    const panelRemoveAnimation = () => {
      const panel = panels[tag.id].getElement();
      const startHeight = panel.scrollHeight;
      panel.classList.add('smui-accordion__panel--removed');
      panel.style.height = startHeight + 'px';
      requestAnimationFrame(() => (panel.style.height = 0 + 'px'));
      panel.addEventListener('transitionend', (e: TransitionEvent) => {
        if (e.propertyName == 'height') {
          panel.classList.remove('smui-accordion__panel--removed');
          panel.style.height = 'auto';
          tags = tags.filter((t) => t.id != tag.id);
        }
      });
    };

    let isPanelOpen = false;
    for (const key in panels) {
      const panelP = panels[key];
      if (panelP?.isOpen()) {
        panelP.setOpen(false);
        if (!isPanelOpen) {
          panelP.getElement().addEventListener(
            'SMUIAccordionPanel:closed',
            () => {
              panelRemoveAnimation();
            },
            { once: true }
          );
        }
        isPanelOpen = true;
      }
    }
    if (!isPanelOpen) {
      panelRemoveAnimation();
    }

    snackbarTagChangeSavedText = `Tag '${tag.name}' removed!`;
    snackbarTagChangeSaved.open();
    setTimeout(() => snackbarTagChangeSaved.close(), 2000);
  }

  function onDeleteClick(e: Event, tag: Tag) {
    e.stopPropagation();
    deleteTag(tag);
  }
</script>

{#if $tagsQuery.fetching}
  <h1>Loading tags...</h1>
{:else if $tagsQuery.error}
  <h1>Failed to load tags: {$tagsQuery.error.message}</h1>
{:else}
  <Accordion>
    {#each tags as tag}
      <Panel bind:this={panels[tag.id]}>
        <Header>
          {tag.name}
          <IconButton slot="icon" on:click={(e) => onDeleteClick(e, tag)}>
            <ButtonIcon class="material-icons">delete_forever</ButtonIcon>
          </IconButton>
        </Header>
        <Content>
          <Textfield
            bind:value={tag.name}
            label="Tag-Name"
            bind:this={nameFields[tag.id]}
            on:change={() => tagChange(tag)}>
            <HelperText slot="helper">Human-Readable name of the tag that is shown in UI</HelperText>
          </Textfield>
        </Content>
      </Panel>
    {/each}
    <Panel nonInteractive>
      <Header ripple={false}>
        <Button variant="outlined" on:click={newTag}>
          <Label>Add new tag</Label>
          <Icon class="material-icons">add</Icon>
        </Button>
      </Header>
    </Panel>
  </Accordion>
{/if}

<Snackbar bind:this={snackbarTagChangeSaved} timeoutMs={4000}>
  <Label>{snackbarTagChangeSavedText}</Label>
</Snackbar>
