<script>
    import GlobalStyle from '../components/GlobalStyle.svelte';
    import Background from '../components/Background.svelte';
    import Nav from '../components/Nav.svelte';
    export let segment;
</script>

<style>
    main {
        /* Placement */
        @apply m-0 box-border flex-grow z-10;

        /* Layout */
        @apply px-0 overflow-auto inline-flex;
    }

    .route-container{
        /* Placement */
        @apply m-0 h-full max-h-full w-full box-border;
        @screen sm { @apply mx-10; }
        @screen lg { @apply mx-20; }

        /* Layout */
        @apply py-4 px-8 overflow-auto;

        /* Appearance */
        @apply rounded bg-gray-100 bg-opacity-25;
        backdrop-filter: blur(4px);

        /* Typography */
        @apply text-black;

        & > * {
            @apply px-0 py-4;
        }
    }
</style>
<GlobalStyle/>

<Nav {segment}/>
<main>
    <Background/>
    <div class="route-container">
    <slot></slot>
    </div>
</main>
