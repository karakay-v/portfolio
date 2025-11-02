<template>
    <div :class="`loader ${theme}`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Theme } from '../../types/theme';

export default defineComponent({
    name: "Loader",
    props: {
        theme: {
            type: String,
            default: Theme.Light,
            required: false,
            validator: (value: string) =>
                (Object.values(Theme) as string[]).includes(value),
        },
    },
});
</script>

<style lang="scss" scoped>
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.loader {
    width: 80px;
    height: 80px;
    margin: 16px;
    aspect-ratio: 1;
    position: relative;

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        margin: -16px 0 0 -16px;
        width: 32px;
        height: 32px;
        padding: 5px;
        background: $primary-neutral;
        animation: l2-1 2s  infinite, l2-2 1s infinite ;
        transition: box-shadow 0.3s ease;
        transform: blur(1.2);
    }

    &:after {
        animation-delay: -1s,0s;
    }

    &.light {
        &:after {
            background: $primary-black;
        }
    }

    &.dark {
        &:after {
            background: $primary-white;
        }
    }
}

@keyframes l2-1 {
    0%   { top: 0   ; left: 0    }
    25%  { top: 100%; left: 0    }
    50%  { top: 100%; left: 100% }
    75%  { top: 0   ; left: 100% }
    100% { top: 0   ; left: 0    }
}

@keyframes l2-2 {
    40%, 50% { transform: rotate(0.25turn) scale(0.5) }
    100%     { transform: rotate(0.5turn) scale(1) }
}

</style>