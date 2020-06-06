<script>
    import GlobalStyle from '../components/GlobalStyle.svelte';
    import Nav from '../components/Nav.svelte';
    export let segment;
</script>

<style>
    :root {
        --bg-size: 50vh;
    }
    #background {
        /* Placement */
        @apply w-full h-full absolute z-0;
    }

    #background-slider {
        /* Placement */
        @apply h-full;
        width: calc(100% + calc(2*var(--bg-size)));

        /* Appearance */
        background: url("90527-dij.jpg") repeat left top;
        background-size: var(--bg-size);
        animation: slide 24s linear infinite;
        filter: contrast(100) invert(100%) brightness(0.3);
    }

    @keyframes slide{
        0%{
            transform: translate3d(-var(--bg-size), 0, 0);
        }
        100%{
            transform: translate3d(calc(-2*var(--bg-size)), 0, 0);
        }
    }

    main {
        /* Placement */
        @apply m-0 box-border flex-grow z-10;

        /* Layout */
        @apply px-0 overflow-auto inline-flex;
        @screen sm { @apply px-10; }
        @screen lg { @apply px-20; }
    }

    .route-container{
        /* Placement */
        @apply m-0 h-full max-h-full w-full box-border;

        /* Layout */
        @apply py-4 px-8 overflow-auto;

        /* Appearance */
        @apply rounded bg-gray-200 bg-opacity-50;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);

        /* Typography */
        @apply text-gray-800;

        & > * {
            @apply px-0 py-4;
        }
    }
</style>
<GlobalStyle/>

<div id="background"><div id="background-slider"></div></div>
<Nav {segment}/>
<main>
    <div class="route-container">
    <slot></slot>
    </div>
</main>
