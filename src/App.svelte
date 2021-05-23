<script>
  import { onMount } from 'svelte';

  import Home from './pages/Home/Home.svelte'
  import Portfolio from './pages/Portfolio/Portfolio.svelte'

  import LiftButton from './components/LiftButton.svelte'

  export let section;

  onMount(async () => {
    window.location.href = `/#${section}`;
  });
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @tailwind screens;

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    /* Placement */
    @apply m-0 h-screen max-h-screen;
    /* Layout */
    @apply overflow-hidden;
    /* Appearance */
    @apply bg-yellow-500;
    /* Typography */
    @apply text-black-500 text-base leading-normal;
  }

  main {
    /* Placement */
    @apply m-0 h-full w-full;
    /* Layout */
    @apply inline-block;
  }

  :global(main > section) {
    /* Placement */
    @apply m-0 h-screen w-full;
  }
</style>

<main>
  <Home/>
  <Portfolio/>
  <LiftButton section={section}/>
</main>
