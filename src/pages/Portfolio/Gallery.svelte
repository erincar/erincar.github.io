<script></script>

<style>
    .gallery-container {
    /* Placement */
    @apply w-full h-full;
    /* Layout */
    @apply flex flex-col;
    /* Appearance */
    @apply bg-green-500 text-black-500;
  }

  .gallery-container > .tag-browser {
    /* Placement */
    @apply flex-initial h-20;
    /* Layout */
    @apply py-4 px-3 flex flex-row overflow-y-scroll;
    /* Appearance */
    @apply bg-black-500 text-white-500;
    /* Typography */
    @apply text-3xl;
  }

  .tag-browser > div {
    @apply block bg-pink-700 mx-1;
  }

  .gallery-container > .entry-browser {
    /* Placement */
    @apply flex-1;
    /* Layout */
    /* Appearance */
    /* Typography */
    @apply text-xl;
  }
</style>

<div class="gallery-container">
  <div class="tag-browser">
    {#each [...Array(40).keys()] as tag}
      <div>{tag.toString().repeat(10)}</div>
    {/each}
  </div>
  <div class="entry-browser">b</div>
</div>
