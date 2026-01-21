<template>
    <div id="skills" class="inner-skills_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Skills</span>
            </h2>
        </div>

        <div data-aos="fade-up" class="wrapper-skills_section">

            <Skill name="Git" :icon="GitIcon" />
            <Skill name="GitHub" :icon="GitHubIcon" />
            <Skill name="Linux" :icon="LinuxIcon" />
            <Skill name="Docker" :icon="DockerIcon" />
            <Skill name="Postgres" :icon="PostgresIcon" />
            <Skill name="Java" :icon="JavaIcon" />
            <Skill name="Spring Boot" :icon="SpringBootIcon" />
            <Skill name="HTML5 & CSS3" :icon="Html5AndCss3Icon" />
            <Skill name="Sass" :icon="SassIcon" />
            <Skill name="JavaScript" :icon="JavaScriptIcon" />
            <Skill name="Vue" :icon="VueIcon" />
            <Skill name="AWS EC2" :icon="AwsIcon" />

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skill from '@/components/portfolio/UI/Skill.vue';
import GitIcon from '@/assets/icons/icon-git.png';
import GitHubIcon from '@/assets/icons/github.png';
import LinuxIcon from '@/assets/icons/tux.png';
import DockerIcon from '@/assets/icons/docker.png';
import PostgresIcon from '@/assets/icons/postgres.png';
import JavaIcon from '@/assets/icons/java.png';
import SpringBootIcon from '@/assets/icons/spring-boot.png';
import Html5AndCss3Icon from '@/assets/icons/html5-and-css3.png';
import SassIcon from '@/assets/icons/icon-sass.png';
import JavaScriptIcon from '@/assets/icons/icon-javascript.png';
import VueIcon from '@/assets/icons/vue.png';
import AwsIcon from '@/assets/icons/aws.png';

export default defineComponent({
    name: "SkillsSection",
    data() {
        return({
            GitIcon,
            GitHubIcon,
            LinuxIcon,
            DockerIcon,
            PostgresIcon,
            JavaIcon,
            SpringBootIcon,
            Html5AndCss3Icon,
            SassIcon,
            JavaScriptIcon,
            VueIcon,
            AwsIcon,
        });
    },
    components: {
        Skill,
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-skills_section {
    padding: 60px 80px;

    @media (max-width: 1260px) {
        padding: 40px 16px;
    }

    @media (max-width: 390px) {
        padding: 40px 0;   
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

.wrapper-skills_section {
    margin-top: 20px;
    padding: 20px 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(196px, 196px));
    gap: 40px 71px;
    justify-content: center;

    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(165px, 165px));
        padding: 0;
        gap: 20px;    
    }
}

</style>