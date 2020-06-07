<script>
</script>

<style>
    :root {
        --bg-size: calc(100vh/3);
    }

    .background-container {
        /* Placement */
        @apply w-full h-full overflow-hidden absolute;

        /* Layout */
        @apply flex;
    }

    .background {
        /* Placement */
        @apply w-1/2 h-full z-0;

        @keyframes slide {
            0%{
                background-position-x: 0;
            }
            100%{
                background-position-x: var(--bg-size);
            }
        }

        @keyframes color-frenzy {
            0%{
                filter: contrast(80%)
                brightness(0.8) invert(100%)
                hue-rotate(20deg) saturate(0);
            }
            100%{
                filter: contrast(80%)
                brightness(0.8) invert(100%)
                hue-rotate(40deg) saturate(200);
            }
        }

        & > .slider {
            /* Placement */
            @apply w-full h-full overflow-hidden;
            width: calc(4*var(--bg-size));

            /* Appearance */
            background: url("90527-dij.jpg") repeat left top;
            background-size: var(--bg-size);
            animation:
                slide 2s ease-in-out infinite normal,
                color-frenzy 2s ease infinite alternate;
        }

        &.left {
            & > .slider {
                @apply float-right;
            }

        }

        &.right {
            & > .slider {
                @apply float-left;
                animation:
                    slide 2s ease-in-out infinite reverse,
                    color-frenzy 2s ease infinite alternate;
            }
        }
    }
</style>

<div class="background-container">
<div class="background left"><div class="slider"></div></div>
<div class="background right"><div class="slider"></div></div>
</div>