<script>
    import GlobalStyle from '../components/GlobalStyle.svelte';
    import Background from '../components/Background.svelte';
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';
    export let segment;
</script>

<style>
    main {
        /* Placement */
        @apply m-0 box-border flex-grow z-10;

        /* Layout */
        @apply px-0 py-2 overflow-auto inline-flex;
    }

    .route-container{
        /* Placement */
        @apply m-0 w-full h-full box-border;

        /* Layout */
        @apply p-0 overflow-hidden;
    }

    .section-container {
        /* Placement */
        @screen sm { @apply mx-10; }
        @screen lg { @apply mx-20; }

        /* Layout */
        @apply flex flex-col justify-center;

        /* Appearance */
        @apply rounded bg-brown bg-opacity-25;
        backdrop-filter: blur(4px);
        transition: background-opacity 2s ease-out 0.4s;

        /* Typography */
        @apply text-dark text-3xl;
    }
</style>
<GlobalStyle/>

<Nav {segment}/>
<Background/>
<main>
    <div
        class="{segment === undefined ? '' : 'section-container '} route-container"
    >
        <slot></slot>
    </div>
</main>
<Footer/>
