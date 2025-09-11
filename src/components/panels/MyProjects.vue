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
                <Project    :screenshoot="EsettlementScreenshoot"
                            number="01"
                            name="Electronic settlement system for dormitories"
                            description="Esettltment is the electronic settlement system for dormitories. \nIt's main task is to simplify the process of submitting documents for accommodation in a dormitory by applicants/students."
                            link="https://3.76.126.104/"
                            sourceLink="https://github.com/sc-fmct-tech/esettlement-spa/" />
            </div>

            <div :data-aos="handleAOS('fade-right', 'fade-up')">        
                <Project    :screenshoot="USeekScreenshoot"
                            number="02"
                            name="U'Seek Student Marketplace (Frontend side)"
                            description="
                                U'Seek — University (університет) seek (search), and U (slang for “you”). Slogan: “U'Seek — for us, by us. 
                                U'Seek is the first marketplace in Ukraine created “by students, for students.”
                                Compared to other well-known global and Ukrainian marketplaces, we are still quite small. However, our users — especially students — already have the opportunity to bring their products or services to a (still low-competition) market in order to find potential buyers or partners."
                            link="https://useek.com.ua/"
                            :align="Align.Right" />
            </div>

            <div :data-aos="handleAOS('fade-left', 'fade-up')">
                <Project    :screenshoot="PortfolioScreenshoot"
                            number="03"
                            name="Portfolio Website"
                            description="This is the project you’re literally looking at right now.  
                                If it’s broken - congrats, you’ve just discovered my debugging stage live.  
                                If it’s not - then enjoy the ride! And yes, the source code is open, so feel free to peek behind the curtain on GitHub."
                            link="https://karakay-v.github.io/"
                            sourceLink="https://github.com/Karakay-V/portfolio/" />
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