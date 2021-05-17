<script>
  import Links from './components/Links.svelte'
  import Landing from './components/Landing.svelte'
  import Portfolio from './components/Portfolio.svelte'
  export let name;
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
    @apply bg-orange;
    /* Typography */
    @apply text-dark text-base leading-normal;
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
  <Landing/>
  <Portfolio/>
</main>
<Links/>