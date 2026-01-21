<template>
    <div class="inner-expirience_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Experience</span>
            </h2>
        </div>

        <div class="wrapper-expirience_section">

            <div data-aos="fade-up">
                <Experience :icon="DuckWhichOpenToWork"
                    position="Open to Work in Web Development"
                    description="At the moment, I don’t have official commercial experience in the field (the kind recruiters usually expect to see). However, I have been actively learning and building my own projects since 2021 from web apps and APIs to full portfolio websites. I’m eager to join a team where I can apply my skills, keep growing, and contribute to real-world products."
                    period="Currently" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '@/components/portfolio/UI/Experience.vue';

/***
    Image Designer: https://www.figma.com/@najmahsalam
    Figma File: https://www.figma.com/community/file/1313934100864626000/alternative-linkedin-opentowork-banners
***/
import DuckWhichOpenToWork from '@/assets/icons/open-to-work.png';

export default defineComponent({
    name: "ExperienceSection",
    data() {
        return({
            DuckWhichOpenToWork,
        });
    },
    components: {
        Experience,
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-expirience_section {
    background: $primary-black;
    padding: 60px 80px;

    @media (max-width: 1260px) {
        padding: 40px 16px;
    }
}

.wrapper-title {
    padding: 20px 0;

    h2.title {
        margin: 0;
        padding: 0;
        text-align: center;
        white-space: nowrap;
        @include fonts.responsive-font(48, 28, 1440);
        @include fonts.prevent-selecting;
        color: $primary-white;
        
        span {
            &.display-regular {
                @include fonts.sora-font(400);        
            }

            &.display-extra_bold {
                @include fonts.sora-font(800);
            }
        }
    }
}

.wrapper-expirience_section {
    margin-top: 20px;
    padding: 20px calc(32px + 24px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        padding: 20px 0;
        gap: 20px;
    }
}

</style>