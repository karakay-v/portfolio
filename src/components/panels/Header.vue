<script setup lang="ts">
import { ref } from 'vue';
import { useFixedHeader } from 'vue-use-fixed-header';

const headerRef = ref(null);

const { styles } = useFixedHeader(headerRef)
</script>

<template>
    <div class="header_indent"></div>

    <header id="header" ref="headerRef" :style="styles">
        <Logo />

        <nav class="wrapper-navigation_links">
            <div class="underline" :style="underlineStyle"></div>

            <NavLink
                label="About Me"
                to="#about-me"
                :isSelected="selectedLink === '#about-me'"
                @click="handleClick('#about-me', $event)" />

            <NavLink
                label="Skills"
                to="#skills"
                :isSelected="selectedLink === '#skills'"
                @click="handleClick('#skills', $event)" />

            <NavLink
                label="Projects"
                to="#projects"
                :isSelected="selectedLink === '#projects'"
                @click="handleClick('#projects', $event)" />

            <NavLink
                label="Contact me"
                to="#contact-me"
                :isSelected="selectedLink === '#contact-me'"
                @click="handleClick('#contact-me', $event)" />
        </nav>

        <a href="/resume" target="_blank" class="download_button-cv">
            <Button label="Resume"
                    :icon="DownloadIcon"
                    :iconPosition="ButtonIconPosition.Right" />
        </a>

        <Slide class="burger-menu"
               noOverlay
               right
               closeOnNavigation
        >
            <div class="container-burger_menu_nav">
                <NavLink
                    label="About Me"
                    to="#about-me"
                    :theme="Theme.Dark"
                    :isSelected="selectedLink === '#about-me'"
                    @click="handleClick('#about-me', $event)" />

                <NavLink
                    label="Skills"
                    to="#skills"
                    :theme="Theme.Dark"
                    :isSelected="selectedLink === '#skills'"
                    @click="handleClick('#skills', $event)" />

                <NavLink
                    label="Projects"
                    to="#projects"
                    :theme="Theme.Dark"
                    :isSelected="selectedLink === '#projects'"
                    @click="handleClick('#projects', $event)" />

                <NavLink
                    label="Contact me"
                    to="#contact-me"
                    :theme="Theme.Dark"
                    :isSelected="selectedLink === '#contact-me'"
                    @click="handleClick('#contact-me', $event)" />
            </div>
            <a href="/resume" target="_blank">
                <Button label="Resume"
                        :icon="DownloadIcon"
                        :state="ButtonState.Active"
                        :iconPosition="ButtonIconPosition.Right" />
            </a>
        </Slide>
    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '../UI/Logo.vue';
import Button from '../UI/Button.vue';
import DownloadIcon from '../../assets/icons/download.png';
import { ButtonIconPosition } from '../../types/button-types/button-icon-position';
import NavLink from '../UI/NavLink.vue';

// @ts-ignore
import { Slide } from 'vue3-burger-menu';

import { Theme } from '../../types/theme';
import { ButtonState } from '../../types/button-types/button-state';

export default defineComponent({
    name: "Header",
    components: {
        Logo,
        NavLink,
        Button,
        Slide,
    },
    data() {
        return({
            Theme,
            ButtonState,
            DownloadIcon,
            ButtonIconPosition,
            selectedLink: "",
            underlineStyle: {
                left: '0px',
                width: '0px',
                transform: 'scaleX(1)',
            },
            burgerIsActive: false,
        });
    },
    methods: {
        handleClick(link: string, event: MouseEvent) {
            this.selectedLink = link;
            this.updateUnderline(event);
        },
        updateUnderline(event: MouseEvent) {
            const target = event.target as HTMLElement;
            if (!target) return;

            const { offsetLeft, offsetWidth } = target;

            this.underlineStyle = {
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
                transform: 'scaleX(1.6)',
            };

            setTimeout(() => {
                this.underlineStyle = {
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`,
                    transform: 'scaleX(1)',
                };
            }, 50);
        },
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/shadow";

a {
    text-decoration: none;
}

.header_indent {
    height: 108px;

    @media (max-width: 768px) {
        height: 72px;
    }
}

#header {
    width: calc(100% - 80px - 80px);
    padding: 24px 80px;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    @include shadow.testimonial-shadow;

    @media (max-width: 768px) {
        width: calc(100% - 16px - 16px);
        padding: 16px;
    }
}

.wrapper-navigation_links {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;

    .underline {
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: $primary-neutral;

        transform-origin: center;
        transform: scaleX(1);
        transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 0.3s ease left, 0.3s ease width;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        display: none;
    }
}

.download_button-cv {
    @media (max-width: 768px) {
        display: none;
    }
}

/* Styling burger button */
.burger-menu {
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
}
::v-deep(.bm-burger-button) {
    position: relative;
    top: 0;
    left: auto;
    right: 0;
    width: calc(27px + 4px);
    height: calc(18px + 4px);
}
::v-deep(.bm-burger-bars) {
    background-color: $primary-black;
    height: 17%;
}

/* Styling burger menu */
::v-deep(.bm-menu) {
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    padding-top: 75px;
}
::v-deep(.bm-item-list) {
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.container-burger_menu_nav {
    width: 100%;
    padding: 0;
    color: $primary-white !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .wrapper {
        width: 100%;
        text-align: center;
    }
}
::v-deep(.cross-style) {
    top: 25px;
    right: 9px;
}
::v-deep(.bm-cross) {
    background-color: $primary-white;
    width: 4px !important;
    height: 28px !important;
}

</style>