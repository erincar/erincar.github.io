<script>
  export let name;
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @tailwind screens;

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
    @apply flex flex-col justify-items-center align-middle;
  }
</style>

<main>
  <h1>{name}</h1>
</main>
