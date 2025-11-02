<template>
    <div class="inner-hero_section">
        <div class="wrapper-hero_section">

            <div data-aos="fade-left" data-aos-duration="2000" class="container-cover_image"></div>

            <div data-aos="fade-right" data-aos-duration="2000" class="container-banner">
                <h2 class="banner_heading">
                    <span class="display-regular">Hello I’am</span>
                    <span class="display-extra_bold"> Vlad Karakai.</span>
                    <br />
                    <span class="display-extra_bold">Full Stack</span>
                    <span class="outlined-extra_bold"> Developer</span>
                    <br />
                    <span class="display-regular">Based In</span>
                    <span class="display-extra_bold"> Kyiv.</span>
                </h2>
                <p class="banner_paragraph">
                    I began my coding journey in 2021 and since then I’ve been creating digital things that (hopefully) make life easier. When I’m not coding, I’m probably reading about psychology, working out, or trying to make music - though whether it’s really music is still up for debate.
                </p>
            </div>

            <div class="container-social_buttons">
                <Button :icon="LinkedInIcon" 
                        :icon-position="ButtonIconPosition.Center" 
                        :state="ButtonState.Active" 
                        @click="openLink('https://linkedin.com/in/karakay-v/')" />
                <Button :icon="GitHubIcon" 
                        :icon-position="ButtonIconPosition.Center" 
                        :state="ButtonState.Active"
                        @click="openLink('https://github.com/Karakay-V/')" />
                <Button :icon="RedditIcon" 
                        :icon-position="ButtonIconPosition.Center" 
                        :state="ButtonState.Active"
                        @click="openLink('https://www.reddit.com/user/donky_HOT/')" />
                <Button :icon="DiscordIcon" 
                        :icon-position="ButtonIconPosition.Center" 
                        :state="ButtonState.Active"
                        @click="openLink('https://discordapp.com/users/karakay/')" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../UI/Button.vue';
import { ButtonIconPosition } from '../../types/button-types/button-icon-position';
import { ButtonState } from '../../types/button-types/button-state';
import LinkedInIcon from '../../assets/icons/linkedin.png';
import GitHubIcon from '../../assets/icons/github.png';
import RedditIcon from '../../assets/icons/reddit.png';
import DiscordIcon from '../../assets/icons/discord.png';
import BackgroundPCBoy from '../../assets/covers/boy-cover.pc.png';
import BackgroundMobileBoy from '../../assets/covers/boy-cover.mobile.png';
import { ButtonSize } from '../../types/button-types/button-size';

export default defineComponent({
    name: "HeroSection",
    data() {
        return({
            ButtonIconPosition,
            ButtonState,
            ButtonSize,
            LinkedInIcon,
            GitHubIcon,
            RedditIcon,
            DiscordIcon,
            BackgroundPCBoy,
            BackgroundMobileBoy,
        });
    },
    components: {
        Button,
    },
    methods: {
        openLink(url: string) {
            window.open(`/redirect?to=${url}`, '_blank');
        },
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-hero_section {
    padding: 60px 80px;
    max-height: 716px;

    @media (max-width: 1260px) {
        padding: 40px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: max-content;
    }
}

.wrapper-hero_section {
    position: relative;
    height: max-content;
    padding: 110px 0 110px 32px;

    @media (max-width: 1260px) {
        display: inline-block;
        padding: 0;
    }
}

h2, p {
    margin: 0;
}

.container-banner {
    max-width: 600px;
    z-index: 2;

    h2.banner_heading {
        white-space: nowrap;
        @include fonts.responsive-font(48, 28, 1440);
        @include fonts.prevent-selecting;
        
        span {
            &.display-regular {
                @include fonts.sora-font(400);        
            }

            &.display-extra_bold {
                @include fonts.sora-font(800);
            }

            &.outlined-extra_bold {
                @include fonts.sora-font(800);
                @include fonts.stroke(3, $primary-black);
                letter-spacing: 1px;
                color: $primary-white;

                @media (max-width: 1260px) {
                    @include fonts.stroke(2, $primary-black);
                }
            }
        }
    }

    .banner_paragraph {
        @include fonts.sora-font(400);
        @include fonts.responsive-font(16, 16, 1440);
        @include fonts.prevent-selecting;
        letter-spacing: 0.32px;
        line-height: 150%;
        color: $zinc-500;
        margin-top: 32px;
    }

    @media (max-width: 1260px) {
        margin-top: 32px;
    }

}

.container-cover_image {
    @include image.prevent-manipulations;
    transition: width 0.3s ease;
    width: 60%;
    max-width: 796px;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 32px;
    z-index: 1;

    background-image: url('../../assets/covers/boy-cover.pc.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;


    @media (max-width: 1260px) {
        background-image: url('../../assets/covers/boy-cover.mobile.png');
        width: 100%;
        aspect-ratio: 686 / 664;
        position: static;
    }
}

.container-social_buttons {
    width: max-content;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
    position: absolute;
    left: 32px;
    bottom: -28px;

    @media (max-width: 1260px) {
        margin-top: 32px;
        position: static;
        gap: 24px;
    }
}
</style>