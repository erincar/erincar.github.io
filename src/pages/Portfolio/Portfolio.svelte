<script>
  import PersonCard from './PersonCard.svelte'
  import Gallery from './Gallery.svelte'

  let activeElement = "personcard";

  function activate(element) {
    return () => {
      activeElement = element;
    };
  }
</script>

<style>
  section {
    /* Layout */
    @apply flex flex-col;
  }

  .main-content {
    /* Placement */
    @apply w-full flex-auto;
    /* Layout */
    @apply flex flex-row;
  }

  .main-content > div.personcard, .main-content > div.gallery {
    /* Placement */
    @apply w-0 flex-grow-0 flex-shrink;
  }

  .main-content > div.active {
    /* Placement */
    @apply w-full flex-grow flex-shrink-0;
  }

  .bottom-navigator {
    @apply h-20 w-full flex flex-row justify-items-stretch;
    @apply bg-pink-500;
  }

  .bottom-navigator > button {
    @apply px-4;
  }
</style>

<section id="portfolio">
  <div class="main-content">
    <div class="personcard" class:active="{activeElement === 'personcard'}">
      <PersonCard/>
    </div>
    <div class="gallery" class:active="{activeElement === 'gallery'}">
      <Gallery/>
    </div>
  </div>

  <div class="bottom-navigator">
    <button on:click={activate("personcard")}>p</button>
    <button on:click={activate("gallery")}>g</button>
  </div>
</section>
