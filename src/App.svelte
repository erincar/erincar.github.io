<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Portfolio from "./routes/Portfolio.svelte";

  import LiftButton from './components/LiftButton.svelte'

  export let url = "";
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

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="portfolio">Portfolio</Link>
  </nav>
  <main>
    <Route path="/"><Home /></Route>
    <Route path="portfolio" component="{Portfolio}" />
  </main>
</Router>
