<script>
    import GlobalStyle from '../components/GlobalStyle.svelte';
    import Nav from '../components/Nav.svelte';
    export let segment;
</script>

<style>
    #background {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }

    #background-slider {
        width: calc(100% + 12em);
        height: 100%;
        background: url("90527-dij.jpg") repeat left top;
        background-size: 6em;
        animation: slide 6s linear infinite;
        filter: contrast(100) invert(100%) brightness(0.3);
    }

    @keyframes slide{
        0%{
            transform: translate3d(-6em, 0, 0);
        }
        100%{
            transform: translate3d(-12em, 0, 0);
        }
    }

    main {
        /* Placement */
        margin: 0;
        box-sizing: border-box;
        flex-grow: 1;

        /* Layout */
        padding: 0 5em 0 5em;
        display: inline-flex;
        overflow: auto;
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
