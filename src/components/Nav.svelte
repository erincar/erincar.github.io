<script>
    import Icon from 'fa-svelte';
    import {
        faDiscord,
        faTelegram,
    } from '@fortawesome/free-brands-svg-icons';
    import {
        faEnvelope,
        faExternalLinkAlt,
    } from '@fortawesome/free-solid-svg-icons';

    const external_links = {
        'telegram': ['https://t.me/erincar', faTelegram],
        'discord': ['https://discord.gg/5Mj9Uhb', faDiscord],
        'mail': ['mailto:erar93@gmail.com', faEnvelope],
    };
    const index_title = 'home';
    export let segment;
</script>

<style>
    .main-container {
        /* Placement */
        @apply inline-flex flex-grow-0 z-10;

        /* Layout */
        @apply px-20 py-0 justify-between;

        /* Appearance */
        @apply bg-transparent;

        /* Typography */
        @apply text-4xl text-gray-400;
    }

    ul {
        @apply m-0 p-0;
    }

    li {
        /* Placement */
        @apply block float-left h-full;

        /* Layout */
        @apply px-3 py-1;

        & > [aria-current] {
            /* Appearance */
            @apply border-b-2 border-solid border-red-600 border-opacity-75;
        }
    }

    a, a:visited {
        /* Layout */
        @apply p-0;

        /* Typography */
        @apply font-medium no-underline;

        &:hover {
            @apply font-normal text-gray-100 text-opacity-100;
        }
    }
</style>

<div class="main-container">
    <ul>
        {#each Object.entries(external_links) as [name, [url, icon]]}
        <li><a href={url} target="_blank">
            <Icon icon={icon}/>
        </a></li>
        {/each}
    </ul>

    <!-- <ul>
        <li><a href="links">
            <Icon icon={faExternalLinkAlt}/>
        </a></li>
    </ul> -->

    <nav>
        <ul>
            {#each [undefined, "code", "music", "games", "blog"] as route}
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
</div>
