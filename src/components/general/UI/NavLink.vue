<template>
    <div class="wrapper"
        v-scroll-to="{
            element: to,
            duration: 1200,
            easing: 'easeInOutCubic',
            offset: -60,
        }"    
    >
        <button :class="`${isSelected ? 'selected' : ''} ${theme === Theme.Dark ? 'theme-dark' : 'theme-light'}`" >
            {{ label }}
        </button>
    </div>
</template>

<script scoped lang="ts">
import { defineComponent } from 'vue';
import { Theme } from '@/types/theme';

export default defineComponent({
    name: "NavLink",
    data() {
        return({
            Theme,
        });
    },
    props: {
        to: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        isSelected: {
            type: Boolean,
            default: false,
            required: false,
        },
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

<style lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;

.wrapper {
    padding: 5px 0;
    
    button {
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
        transition: 0.3s ease color;
        @include fonts.sora-font(600);
        @include fonts.responsive-font(20, 16, 1440);

        &:hover {
            color: $primary-neutral;
        }

        &.selected {
            color: $primary-neutral;
        }

        &.theme-light {
            color: $primary-black;
        }

        &.theme-dark {
            color: $primary-white;
        }
    }
}
</style>