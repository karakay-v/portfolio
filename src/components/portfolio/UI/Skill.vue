<template>
    <div    :class="`wrapper ${currentTheme === Theme.Dark ? 'theme-dark' : 'theme-light'}`"
            @click="$emit('focus')"
            @mousedown="handleMouseAction"
            @mouseup="handleMouseAction"
            @mouseenter="handleMouseAction"
            @mouseleave="handleMouseAction"
    >
        <div class="container-icon">
            <img :src="icon" :alt="`Skill: ${name}`" />
        </div>
        <h5 class="skill-name">{{ name }}</h5>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Theme } from '@/types/theme';

export default defineComponent({
    name: "Skill",
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
        name: {
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
@use "/src/assets/styles/image";
@use "/src/assets/styles/colors" as *;

$maxWrapperWidth: calc(186px - 24px - 24px);
$maxWrapperHeight: calc(186px - 37px - 37px);

.wrapper {
    cursor: pointer;
    border: 2px solid $primary-black;
    border-radius: 4px;
    padding: 37px 24px;
    margin: 5px;
    transition: 0.3s ease all;
    
    width: $maxWrapperWidth;
    max-width: $maxWrapperWidth;

    height: $maxWrapperHeight;
    max-height: $maxWrapperHeight;

    @media (max-width: 768px) {
        $maxWrapperWidthMobile: calc(155px - 24px - 24px);
        $maxWrapperHeightMobile: calc(155px - 24px - 24px);


        width: $maxWrapperWidthMobile;
        max-width: $maxWrapperWidthMobile;

        height: $maxWrapperHeightMobile;
        max-height: $maxWrapperHeightMobile;

        padding: 24px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    &:not(.theme-dark) {
        transform: scale(0.98);
    }

    .container-icon {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;        
        
        img {
            @include image.prevent-manipulations;
            transition: 0.3s ease all;
            width: 56px;
            height: 56px;
            filter: invert(0);
        }
    }

    .skill-name {
        @include fonts.prevent-selecting;
        transition: 0.3s ease all;
        margin: 32px 0 0 0;
        @include fonts.sora-font(700);
        @include fonts.responsive-font(20, 20, 1440);
        @include fonts.hide-overflowed-text-multiline(2);
        text-align: center;

        @media (max-width: 768px) {
            margin: 0;
        }
    }

    &.theme-light {
        background-color: $primary-white;
        
        .skill-name {
            color: $primary-black;    
        }
    }

    &.theme-dark {
        background-color: $primary-black;

        .container-icon img {
            filter: invert(1);
        }

        .skill-name {
            color: $primary-white;    
        }
    }
}
</style>