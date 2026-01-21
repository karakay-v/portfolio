<template>
    <div class="inner-testimonial_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Testimonial</span>
            </h2>
        </div>

        <div class="wrapper-testimonial_section">

            <!-- Example how to add Testimonials -->
            <!--  -->
            <!-- <div data-aos="fade-up">
                <Testimonial    :photo="BoyPhoto"
                                quote="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
                                person="Evren Shah"
                                position="Designer"/>
               
            </div> -->

            <div data-aos="fade-up" class="container-no_testimonials">
                <p>Looks a bit empty here... 👀 Be the first to share your feedback!</p>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Testimonial from '@/components/portfolio/UI/Testimonial.vue';
import BoyPhoto from '@/assets/people/boy.png';
import GirlPhoto from '@/assets/people/girl.png';

export default defineComponent({
    name: "TestimonialSection",
    data() {
        return({
            BoyPhoto,
            GirlPhoto,
        });
    },
    components: {
        Testimonial,
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-testimonial_section {
    background: $primary-white;
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
        color: $primary-black;
        
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

.wrapper-testimonial_section {
    margin-top: 20px;
    padding: 20px 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 0;
}

.container-no_testimonials {
    p {
        @include fonts.sora-font(600);
        @include fonts.responsive-font(28, 20, 1440);
        @include fonts.prevent-selecting;
        color: $primary-black;
        text-align: center;
    }
}

</style>