<template>
    <div class="wrapper">
        <div    :class="`container-content ${currentTheme === Theme.Dark ? 'theme-dark' : 'theme-light'}`"
                @click="$emit('focus')"
                @mousedown="handleMouseAction"
                @mouseup="handleMouseAction"
                @mouseenter="handleMouseAction"
                @mouseleave="handleMouseAction"
        >
            <div class="container-image_wrapper">
                <div class="container-image">
                    <img class="image-person" :src="photo" :alt="person" />
                </div>
                <div class="container-quote_symbol">
                    <img class="image-quote_symbol" :src="QuoteSymbolIcon" alt="Quote symbol icon" />
                </div>
            </div>

            <div class="container-quote">
                <p>{{ quote }}</p>
            </div>

            <div class="separator"></div>

            <div class="container-person">
                <p>{{ person }}</p>
            </div>

            <div class="container-position">
                <p>{{ position }}</p>
            </div>
        </div>
    </div>
</template>

<script scoped lang="ts">
import { defineComponent } from 'vue';
import { Theme } from '@/types/theme';
import QuoteSymbolIcon from '@/assets/icons/quote-symbol.svg'; 

export default defineComponent({
    name: "Testimonial",
    data() {
        return({
            Theme,
            QuoteSymbolIcon,
            isPressed: this.isFocused,
        });
    },
    props: {
        photo: {
            type: String,
            required: true,
        },
        quote: {
            type: String,
            required: true,
        },
        person: {
            type: String,
            required: true,
        },
        position: {
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

<style lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";
@use "/src/assets/styles/shadow";

.wrapper {
    padding: 18px;
}

$maxMainContainerWidth: calc(350px - 40px - 40px);
$maxMainContainerHeight: calc(398px - 40px - 40px);


.container-content {
    cursor: pointer;
    @include shadow.testimonial-shadow;
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;
    
    > * + * {
        margin-top: 23px;
    }
    
    width: $maxMainContainerWidth;
    max-width: $maxMainContainerWidth;

    height: $maxMainContainerHeight;
    max-height: $maxMainContainerHeight;

    &:not(.theme-dark) {
        transform: scale(0.98);
    }

    p {
        margin: 0;
    }

    &.theme-light {
        background-color: $primary-white;

        .container-image .image-person {
            border-color: $primary-black;
        }

        .container-quote_symbol {
            background-color: $primary-black;

            .image-quote_symbol {
                filter: invert(0);
                transform: scale(1);
            }
        }

        .container-quote p, .container-person p {
            color: $primary-neutral;
        }
        
        .separator {
            background-color: $primary-black;
        }

        .container-position p {
            color: $zinc-500;
        }

    }

    &.theme-dark {
        background-color: $primary-black;

        .container-image .image-person {
            border-color: transparent;
        }

        .container-quote_symbol {
            background-color: $primary-white;

            .image-quote_symbol {
                filter: invert(1);
                transform: scale(1.1);
            }
        }

        .container-quote p, .container-person p, .container-position p {
            color: $primary-white;
        }

        .separator {
            background-color: $primary-white;
        }
    }
}

.container-image_wrapper {
    position: relative;

    .container-image {
        width: 96px;
        height: 96px;
        z-index: 1;

        border: 1px solid transparent;
        transition: 0.3s ease border-color;

        .image-person {
            width: 100%;
            height: 100%;
            border-radius: 100px;
            @include image.prevent-manipulations;
        }
    }

    .container-quote_symbol {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 2;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        transition: 0.3s ease background-color, 0.3s ease filter, 0.3s ease transform;
        @include image.prevent-manipulations;

        .image-quote_symbol {
            width: 13px;
        }
    }
}

.container-quote {
    padding: 0 11px;

    p {
        @include fonts.sora-font(400);
        @include fonts.responsive-font(16, 16, 1440);
        @include fonts.hide-overflowed-text-multiline(4);
        @include fonts.prevent-selecting;
        text-align: center;
        line-height: 20px;
        letter-spacing: 0.32px;
        transition: 0.3s ease color;
    }
}

.separator {
    width: 120px;
    min-height: 2px;
    max-height: 2px;
    transition: 0.3s ease background-color;
    margin-left: auto;
    margin-right: auto;
}

.container-person, .container-position {
    p {
        @include fonts.sora-font(600);
        @include fonts.responsive-font(20, 20, 1440);
        @include fonts.hide-overflowed-text;
        @include fonts.prevent-selecting;
        text-align: center;
        transition: 0.3s ease color;
    }
}
</style>