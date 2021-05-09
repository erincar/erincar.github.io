<script>
    import Icon from 'fa-svelte';
    import {
        fa500px,
        faArtstation,
        faBehance,
        faDev,
        faDeviantart,
        faDribbble,
        faGithub,
        faHackerrank,
        faItchIo,
        faKaggle,
        faLinkedin,
        faMedium,
        faPinterest,
        faResearchgate,
        faSoundcloud,
        faSpotify,
        faStackOverflow,
        faSteam,
        faTwitter,
        faVimeo,
    } from '@fortawesome/free-brands-svg-icons';

    const external_links = {
        'itch.io': [
            'https://itch.io/profile/erincar',
            faItchIo,
            true,
        ],
        'linkedin': [
            'https://www.linkedin.com/in/erincar/',
            faLinkedin,
        ],
        'researchgate': [
            'https://www.researchgate.net/profile/Erinc_Argimak',
            faResearchgate,
        ],
        'medium': [
            'https://medium.com/@erincar',
            faMedium,
        ],
        'twitter': [
            'https://twitter.com/yosuntutan',
            faTwitter,
        ],
        'spotify': [
            'https://open.spotify.com/user/yosuntutan',
            faSpotify,
        ],
        'pinterest': [
            'https://tr.pinterest.com/erincarg/',
            faPinterest,
        ],
        'soundcloud': [
            'https://soundcloud.com/yosuntutan/',
            faSoundcloud,
            true,
        ],
        'github': [
            'https://github.com/erincar',
            faGithub,
        ],
        'hackerrank': [
            'https://www.hackerrank.com/erincar',
            faHackerrank,
        ],
        'kaggle': [
            'https://www.kaggle.com/erincar',
            faKaggle,
        ],
        'dev.to': [
            'https://dev.to/erincar',
            faDev,
        ],
        'stack overflow': [
            'https://stackoverflow.com/users/8145608/erincar',
            faStackOverflow,
            true,
        ],
        'VSCO': [
            'https://vsco.co/yosuntutan/',
            null,
        ],
        '500px': [
            'https://500px.com/erincar',
            fa500px,
        ],
        'artstation': [
            'https://www.artstation.com/erincar',
            faArtstation,
        ],
        'deviantart': [
            'https://www.deviantart.com/erincar',
            faDeviantart,
        ],
        'dribbble': [
            'https://dribbble.com/erincar',
            faDribbble,
        ],
        'behance': [
            'https://www.behance.net/erincar',
            faBehance,
        ],
        'vimeo': [
            'https://vimeo.com/erincar',
            faVimeo,
            true,
        ],
        'steam': [
            'https://steamcommunity.com/id/erincar/',
            faSteam,
        ],
    };
</script>

<style>
    .footer-container {
        /* Placement */
        @apply sticky bottom-0 left-0;

        /* Layout */
        @apply px-4 py-0 flex flex-row justify-center;

        /* Appearance */
        @apply bg-dark;

        /* Typography */
        @apply text-2xl text-light;
        @screen lg { @apply text-4xl; }
    }

    li {
        /* Placement */
        @apply inline-flex flex-col float-left h-full;

        /* Layout */
        @apply px-1 py-0;

        & > .separator {
            @apply block mx-3 my-auto w-1 bg-current;
            height: 80%;
        }
    }

    a {

        &:hover :global(svg) {
            @apply text-blue;
            @keyframes external-enthusiasm {
                0%{
                    transform: rotateY(0);
                }
                50% {
                    transform: rotateY(180deg);
                }
                100%{
                    transform: rotateY(360deg);
                }
            }
            animation: external-enthusiasm 0.35s ease-in-out 0s 1 normal;
        }
    }

    .custom-svg {
        @apply w-6 h-6 overflow-visible inline-block;
        @screen lg { @apply w-8 h-8; }
        @apply fill-current;
    }
</style>

<div class="footer-container">
    <ul>
        {#each Object.entries(external_links) as [name, [url, icon, ...separator]]}
        <li><a href={url} target="_blank">
            {#if icon}
                <Icon icon={icon}/>
            {:else}
                <svg class="custom-svg">
                    <use xlink:href='{name}.svg#Layer_1'>{name}</use>
                </svg>
            {/if}
        </a></li>
        {#if separator.length > 0}
            <li><div class="separator"></div></li>
        {/if}
        {/each}
    </ul>
</div>