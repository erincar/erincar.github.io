<script>
    export let segment;
    const index_title = 'home';
</script>

<style>
    nav {
        /* Appearance */
        background: transparent;

        /* Placement */
        display: inline-flex;
        flex-grow: 0;

        /* Layout */
        padding: 0 5em;
        justify-content: space-between;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        /* Placement */
        display: block;
        float: left;

        /* Layout */
        padding: 0.6em 0.8em;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
        border-bottom: 2px solid rgba(226, 90, 90, 0.8);
}

    a {
        /* Placement */

        /* Typography */
        text-decoration: none;
        font-weight: 500;
        color: white;
    }

    a:visited {
        font-weight: 300;
        color: rgba(211, 211, 211, 0.8);
    }
</style>

<nav>
    <ul>
        {#each ["spotify", "pinterest", "twitter"] as profile}
        <li>{profile}</li>
        {/each}
    </ul>

    <ul>
        {#each [undefined, "about", "works", "collections", "blog"] as route}
        <li>
            <a
                aria-current='{segment === route ? "page" : undefined}'
                href={route === undefined ? '.' : route}
            >
                {route === undefined ? index_title : route}
            </a>
        </li>
        {/each}
    </ul>
</nav>
