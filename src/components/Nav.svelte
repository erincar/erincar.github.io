<script>
    export let segment;
    const index_title = 'home';
</script>

<style>
    nav {
        /* Appearance */
        background: rgba(49, 202, 230, 0.5);
        border-bottom: 1px solid rgba(49, 202, 230, 0.8);
        font-weight: 300;

        /* Placement */
        display: inline-flex;
        flex-grow: 0;

        /* Layout */
        padding: 0 2em;
        justify-content: center;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        display: block;
        float: left;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
        background-color: blanchedalmond;
}

    a {
        text-decoration: none;
        padding: 0.6em 0.8em;
        display: block;
    }
</style>

<nav>
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
