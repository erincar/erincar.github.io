<script>
  export let section;

  function toggle() {
    section = window.location.hash === "#home" ? "#portfolio" : "#home";
    window.location.replace(section);
  }
</script>

<style>
  button {
    /* Placement */
    @apply fixed bottom-4 right-4 z-10;
    /* Layout */
    @apply p-3;
    /* Appearance */
    @apply rounded-full h-12 w-12 bg-dark text-light;
  }
</style>

<button on:click={toggle}>{section}</button>
