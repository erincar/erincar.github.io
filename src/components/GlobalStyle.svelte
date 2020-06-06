<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @tailwind screens;

    body {
        /* Placement */
        @apply m-0 h-screen max-h-screen;

        /* Layout */
        @apply overflow-hidden;

        /* Typography */
        @apply text-black text-base leading-normal;
    }

    #sapper {
        @apply flex flex-col h-full max-h-full w-full box-border;
    }
</style>