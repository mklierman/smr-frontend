<script lang="ts">
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import ModCard from '$lib/components/mods/ModCard.svelte';
  import Doggo from '$lib/components/general/Doggo.svelte';
  import Card from '@smui/card';
  import { assets } from '$app/paths';
  import Button from '@smui/button';
  import { onMobile, easterEgg, doggoNeedsPats } from '$lib/stores/global';
  import type { PageData } from './$types';
  import { getTranslate } from '@tolgee/svelte';

  export let data: PageData;

  $: ({ mods } = data);

  export const { t } = getTranslate();

  const gridClasses = '3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1';
</script>

<svelte:head>
  <MetaDescriptors description="Satisfactory Mod Repository" title="Home" />
</svelte:head>

<Doggo dogVisible={doggoNeedsPats} />

<div class="flex flex-col min-h-full" style="height: calc(100vh - 64px - 3rem)">
  <div class="mb-4 min-h-[25vh] overflow-hidden">
    {#if !$onMobile}
      <a href="https://smm.ficsit.app" rel="noopener" target="_blank">
        <Card class="h-full">
          <div class="relative h-full w-full">
            <div class="banner smm-banner" />
            <div class="flex absolute w-full h-full top-0 items-center justify-center">
              {#if $easterEgg}
                <img class="h-full flipper-1" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
                <img class="h-full flipper-2" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {:else}
                <img class="h-full flipped" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {/if}
              <div class="text-center">
                <div class="text-4xl mb-2">{$t('home.satisfactory-mod-manager')}</div>
                <div class="text-xl mb-4">
                  Windows - Linux - Epic - Steam
                  {#if $easterEgg || $doggoNeedsPats}{' - Doggo'}{/if}
                </div>
                <div class="2xl:h-1/2 h-1/3 flex justify-center">
                  <img class="h-full" src={assets + '/images/smm_icon_white.webp'} alt="Satisfactory Mod Manager" />
                </div>
              </div>
              {#if $easterEgg}
                <img class="h-full flipper-3" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
                <img class="h-full flipper-4" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {:else}
                <img class="h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {/if}
            </div>
          </div>
        </Card>
      </a>
    {:else}
      <a href="/mods" class="overflow-hidden">
        <Card class="h-full">
          <div class="relative h-full w-full">
            <div class="smm-banner banner" />
            <div class="flex absolute w-full h-full top-0 items-center justify-end text-center">
              <img class="h-full" src={assets + '/images/mods_mobile.webp'} alt="Ficsit Minion" />
            </div>
            <div class="flex absolute w-full h-4/5 top-0 items-center pl-8">
              <div>
                <div class="text-md">
                  We have over <span class="text-amber-600 font-bold">
                    {#if $mods.fetching || $mods.error}
                      ...
                    {:else}
                      {$mods.data.getMods.count}
                    {/if}
                  </span> mods!
                </div>
                <div class="text-md">Most are compatible with the</div>
                <div class="text-md mb-4">latest version of satisfactory.</div>
              </div>
            </div>
            <div class="flex absolute w-full h-full top-0 items-end justify-center">
              <Button variant="unelevated" class="h-1/4 py-3 px-14 w-full" style="background: #5a7b78; color: white">
                Take a look!
              </Button>
            </div>
          </div>
        </Card>
      </a>
    {/if}
  </div>

  <div class="grid xl:grid-cols-2 grid-cols-1 gap-4 flex-1 mb-4">
    <a href="https://discord.gg/xkVJ73E" rel="noopener" target="_blank" class="overflow-hidden min-h-[25vh]">
      <Card class="h-full">
        <div class="relative h-full w-full">
          <div class="modding-banner banner" />
          <div class="flex absolute w-full h-full top-0 items-center justify-center">
            <img class="centered-logo" src={assets + '/images/sf_modding_logo.webp'} alt="Satisfactory Modding Logo" />
          </div>
          <div class="absolute bottom-0 pb-4 px-4 w-full text-gray-400 text-center xl:text-left">
            <span>Community-run Modding Discord</span>
          </div>
        </div>
      </Card>
    </a>
    <a href="https://www.satisfactorygame.com/" rel="noopener" target="_blank" class="overflow-hidden min-h-[25vh]">
      <Card class="h-full">
        <div class="relative h-full w-full">
          <div class="css-banner banner" />
          <div class="flex absolute w-full h-full top-0 items-center justify-center">
            <img
              class="centered-logo"
              src={assets + '/images/satisfactory_logo_full_color_small.webp'}
              alt="Satisfactory Logo" />
          </div>
          <div class="absolute bottom-0 pb-4 px-4 w-full text-gray-300 text-center xl:text-right">
            <span>Official Website</span>
          </div>
        </div>
      </Card>
    </a>
  </div>

  {#if $mods.fetching}
    <div class="grid {gridClasses} gap-4">
      {#each Array(4) as _}
        <FicsitCard fake />
      {/each}
    </div>
  {:else if $mods.error}
    <p>Oh no... {$mods.error.message}</p>
  {:else}
    <div class="grid {gridClasses} gap-4">
      {#each $mods.data.getMods.mods as mod}
        <ModCard {mod} />
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .smm-banner {
    background-image: url('/images/smm_background.webp');
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  .modding-banner {
    background-image: url('/images/bg_nologo.webp');
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  .css-banner {
    background-image: url('/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp');
    filter: blur(8px) brightness(0.5);
    -webkit-filter: blur(8px) brightness(0.5);
  }

  .banner {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .centered-logo {
    max-height: 50%;
    max-width: 60%;
  }

  .flipped {
    transform: scaleX(-1);
  }

  .flipper-1 {
    animation: 0.11s linear 1s infinite alternate flipper;
  }

  .flipper-2 {
    animation: 0.12s linear 1s infinite alternate flipper;
  }

  .flipper-3 {
    animation: 0.13s linear 1s infinite alternate flipper;
  }

  .flipper-4 {
    animation: 0.14s linear 1s infinite alternate flipper;
  }

  @keyframes flipper {
    from {
      transform: scaleX(-1);
    }
    to {
      transform: scaleX(1);
    }
  }

  @media (min-width: 1280px) {
    .centered-logo {
      max-height: 15vh;
    }
  }
</style>
