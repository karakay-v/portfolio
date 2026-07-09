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
            <Skill name="Java" :icon="JavaIcon" />
            <Skill name="Spring Boot" :icon="SpringBootIcon" />
            <Skill name="Spring Framework" :icon="SpringIcon" />
            <Skill name="Netflix Eureka" :icon="NetflixEurekaIcon" />
            <Skill name="Apache Kafka" :icon="ApacheKafkaIcon" />
            <Skill name="HTML5 & CSS3" :icon="Html5AndCss3Icon" />
            <Skill name="Sass" :icon="SassIcon" />
            <Skill name="JavaScript" :icon="JavaScriptIcon" />
            <Skill name="TypeScript" :icon="TypeScriptIcon" />
            <Skill name="Vue" :icon="VueIcon" />
            <Skill name="React" :icon="ReactIcon" />
            <Skill name="Postgres" :icon="PostgresIcon" />
            <Skill name="MariaDB" :icon="MariaDBIcon" />
            <Skill name="Bash / Zsh" :icon="BashIcon" />
            <Skill name="Docker" :icon="DockerIcon" />
            <Skill name="Linux" :icon="LinuxIcon" />
            <Skill name="Ubuntu" :icon="UbuntuIcon" />
            <Skill name="Proxmox" :icon="ProxmoxIcon" />
            <Skill name="AWS EC2" :icon="AwsIcon" />
            <Skill name="MikroTik" :icon="MikroTikIcon" />
            <Skill name="Cisco" :icon="CiscoIcon" />
            <Skill name="Junos" :icon="JunosIcon" />
            <Skill name="VyOS" :icon="VyosIcon" />

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skill from '../UI/Skill.vue';
import GitIcon from '../../assets/icons/icon-git.png';
import GitHubIcon from '../../assets/icons/github.png';
import JavaIcon from '../../assets/icons/java.png';
import SpringBootIcon from '../../assets/icons/spring-boot.png';
import SpringIcon from '../../assets/icons/spring.png';
import NetflixEurekaIcon from '../../assets/icons/netflix-eureka.png';
import ApacheKafkaIcon from '../../assets/icons/apache-kafka.png';
import Html5AndCss3Icon from '../../assets/icons/html5-and-css3.png';
import SassIcon from '../../assets/icons/icon-sass.png';
import JavaScriptIcon from '../../assets/icons/icon-javascript.png';
import TypeScriptIcon from '../../assets/icons/icon-typescript.png';
import VueIcon from '../../assets/icons/vue.png';
import ReactIcon from '../../assets/icons/react.png';
import PostgresIcon from '../../assets/icons/postgres.png';
import MariaDBIcon from '../../assets/icons/mariadb.png';
import BashIcon from '../../assets/icons/bash.png';
import DockerIcon from '../../assets/icons/docker.png';
import LinuxIcon from '../../assets/icons/tux.png';
import UbuntuIcon from '../../assets/icons/ubuntu.png';
import ProxmoxIcon from '../../assets/icons/proxmox.png';
import AwsIcon from '../../assets/icons/aws.png';
import MikroTikIcon from '../../assets/icons/mikrotik.png';
import CiscoIcon from '../../assets/icons/cisco.png';
import JunosIcon from '../../assets/icons/junos.png';
import VyosIcon from '../../assets/icons/vyos.png';

export default defineComponent({
    name: "SkillsSection",
    data() {
        return({
            GitIcon,
            GitHubIcon,
            JavaIcon,
            SpringBootIcon,
            SpringIcon,
            NetflixEurekaIcon,
            ApacheKafkaIcon,
            Html5AndCss3Icon,
            SassIcon,
            JavaScriptIcon,
            TypeScriptIcon,
            VueIcon,
            ReactIcon,
            PostgresIcon,
            MariaDBIcon,
            BashIcon,
            DockerIcon,
            LinuxIcon,
            UbuntuIcon,
            ProxmoxIcon,
            AwsIcon,
            MikroTikIcon,
            CiscoIcon,
            JunosIcon,
            VyosIcon
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