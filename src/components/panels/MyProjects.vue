<template>
    <div id="projects" class="inner-projects_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Projects</span>
            </h2>
        </div>

        <div class="wrapper-projects_section">

            <div :data-aos="handleAOS('fade-left', 'fade-up')">
                <Project    :screenshoot="''"
                            number="01"
                            name="SettleHub: Modern Hotel Management System"
                            description="A modern, microservice-based software designed to replace expensive, legacy enterprise systems in the hotel industry. Born from a complete architectural rewrite and decomposition of an earlier monolithic project, SettleHub features a highly scalable backend, independent services, and a robust infrastructure."
                            sourceLink="https://github.com/orgs/SettleHub/repositories/" />
            </div>

            <div :data-aos="handleAOS('fade-right', 'fade-up')">
                <Project    :screenshoot="EsettlementScreenshoot"
                            number="02"
                            name="Esettlement: Dormitory Monolith (Archived)"
                            description="An archived student startup built as a monolithic Java application to automate university dormitory accommodations. While tightly coupled to specific university needs, this project served as the crucial proof-of-concept that provided the domain logic and inspiration for the modern SettleHub microservice architecture."
                            sourceLink="https://github.com/orgs/sc-fmct-tech/repositories/" 
                            :align="Align.Right" />
            </div>

            <div :data-aos="handleAOS('fade-left', 'fade-up')">        
                <Project    :screenshoot="USeekScreenshoot"
                            number="03"
                            name="U'Seek Student Marketplace"
                            description="The first marketplace in Ukraine created exclusively by and for students. 
                                I developed the frontend architecture using HTML, CSS, and JavaScript, focusing on delivering a responsive, intuitive, and fast user interface that allows students to easily collaborate and trade."
                            link="https://useek.com.ua/" />
            </div>

            <div :data-aos="handleAOS('fade-right', 'fade-up')">
                <Project    :screenshoot="PortfolioScreenshoot"
                            number="04"
                            name="Portfolio Website"
                            description="This is the project you’re literally looking at right now. 
                                If it’s broken - congrats, you’ve just discovered my debugging stage live. 
                                If it’s not - then enjoy the ride! The source code is fully open, so feel free to peek behind the curtain on GitHub."
                            link="https://karakay-v.github.io/"
                            sourceLink="https://github.com/karakay-v/portfolio/"
                            :align="Align.Right" />
            </div>

            <div :data-aos="handleAOS('fade-left', 'fade-up')">
                <Project    :screenshoot="HomelabScreenshoot"
                            number="05"
                            name="Enterprise-Grade Homelab Infrastructure"
                            description="A highly secure, multi-node infrastructure environment featuring advanced firewalling, VLAN-based distribution, diverse VPN implementations, and complex routing. 
                                It operates as a comprehensive data center hosting centralized logging, automated external backups (including commercial remote sites), and a web-based IDE. 
                                Crucially, it serves as my core CI/CD pipeline, utilizing local GitHub Runners to build, test, and deploy my backend services." />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Project from '../UI/Project.vue';
import EsettlementScreenshoot from '../../assets/projects/Esettlement.png';
import USeekScreenshoot from "../../assets/projects/U'Seek.png";
import PortfolioScreenshoot from '../../assets/projects/Portfolio.png';
import HomelabScreenshoot from '../../assets/projects/homelab.png';
import { Align } from '../../types/align';
import { useResponsiveAos } from '../../utils/aosHelper';

export default defineComponent({
    name: "MyProjects",
    data() {
        return({
            Align,
            EsettlementScreenshoot,
            USeekScreenshoot,
            PortfolioScreenshoot,
            HomelabScreenshoot,
        });
    },
    components: {
        Project,
    },
    methods: {
        handleAOS(defaultAnimation: string, verticalAnimation: string) {
            return useResponsiveAos(defaultAnimation, verticalAnimation).value;
        },
    },

});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-projects_section {
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

.wrapper-projects_section {
    margin-top: 20px;
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 1260px) {
        padding: 0;
        gap: 28px;
    }
}

</style>