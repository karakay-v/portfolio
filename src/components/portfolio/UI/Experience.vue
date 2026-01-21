<template>
    <div    :class="`wrapper ${currentTheme === Theme.Dark ? 'theme-dark' : 'theme-light'}`"
            @click="$emit('focus')"
            @mousedown="handleMouseAction"
            @mouseup="handleMouseAction"
            @mouseenter="handleMouseAction"
            @mouseleave="handleMouseAction"
    >
        <div class="container-top">
            <div class="container-title">
                <img class="image-icon" :src="icon" :alt="position" />
                <p class="paragraph-title">{{ position }}</p>
            </div>
        
            <div class="container-period">
                <p class="paragraph-period">{{ period }}</p>
            </div>
        </div>
        
        <div class="container-bottom">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script scoped lang="ts">
import { defineComponent } from 'vue';
import { Theme } from '@/types/theme';

export default defineComponent({
    name: "Experience",
    data() {
        return({
            Theme,
            isPressed: this.isFocused,
        });
    },
    props: {
        icon: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        period: {
            type: String,
            required: true,
        },
        isFocused: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    emits: ['focus'],
    computed: {
        currentTheme(): string {
            return this.isPressed ? Theme.Dark : Theme.Light;
        }
    },
    methods: {
        handleMouseAction() {
            this.isPressed = !this.isPressed;
        },
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.wrapper {
    cursor: pointer;
    padding: 30px 24px;
    margin: 5px;
    width: calc(100% - 24px - 24px - 5px - 5px);
    height: max-content;
    border-radius: 10px;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease all;

    > * + * {
        margin-top: 28px;
    }
    
    p {
        margin: 0;
    }

    &.theme-light {
        background-color: transparent;
        border-color: $zinc-500;
    }

    &.theme-dark {
        background-color: $zinc-800;
        border-color: $zinc-800;
    }
}

.container-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s ease all;

    .container-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;

        .image-icon {
            width: 32px;
            height: 32px;
            align-self: flex-start;
        }

        .paragraph-title {
            @include fonts.sora-font(600);
            @include fonts.responsive-font(24, 20, 1440);
            @include fonts.prevent-selecting;
            text-align: left;
            margin-left: 30px;
            color: $primary-white;
        }
    }

    .container-period {
        .paragraph-period {
            @include fonts.sora-font(600);
            @include fonts.responsive-font(16, 16, 1440);
            @include fonts.hide-overflowed-text;
            @include fonts.prevent-selecting;
            text-align: right;
            color: $zinc-300;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;

        .container-period {
            margin-top: 30px;
        }
    }
}

.container-bottom {
    p {
        @include fonts.sora-font(400);
        @include fonts.responsive-font(16, 16, 1440);
        @include fonts.prevent-selecting;
        text-align: left;
        letter-spacing: 0.32px;
        line-height: 150%;
        color: $zinc-300;
    }
}
</style>