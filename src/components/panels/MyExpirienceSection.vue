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

                <Experience 
                    :icon="MIIT_LLC_Logo"
                    position="System & Infrastructure Administrator"
                    company="MIIT LLC"
                    period="Dec 2025 - Present"
                    description="Managing ISP network infrastructure to ensure high availability and stable performance. Configuring multi-vendor environments (Cisco, MikroTik, Ubiquiti, Juniper) and acting as an L2 escalation point for complex network diagnostics. Additionally, I lead the technical onboarding process, mentoring and training the L1 support team." 
                    :isFocused="true"
                />

                <Experience 
                    :icon="MIIT_LLC_Logo"
                    position="Technical Support Engineer"
                    company="MIIT LLC"
                    period="Oct 2023 - Nov 2025"
                    description="Diagnosed and resolved network connectivity issues, applied deep knowledge of the OSI model and TCP/IP suite, and provided seamless technical assistance. This role built my foundation in deep system troubleshooting and user-centric problem-solving." 
                />
                
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '../UI/Experience.vue';

/***
    Image Designer: https://www.figma.com/@najmahsalam
    Figma File: https://www.figma.com/community/file/1313934100864626000/alternative-linkedin-opentowork-banners
***/
import DuckWhichOpenToWork from '../../assets/icons/open-to-work.png';
import MIIT_LLC_Logo from '../../assets/icons/miit.png';

export default defineComponent({
    name: "MyExpirienceSection",
    data() {
        return({
            DuckWhichOpenToWork,
            MIIT_LLC_Logo,
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