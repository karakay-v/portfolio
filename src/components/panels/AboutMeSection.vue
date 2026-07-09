<template>
    <div id="about-me" class="inner-expirience_section">
        <div class="wrapper-about_me_section">
            <div :data-aos="aosTypeImage" class="wrapper-image">
                <img :src="AboutMePicture" alt="About Me" class="image-about_me" />
            </div>

            <div :data-aos="aosTypeStory" class="wrapper-story">
                <h2 class="title">
                    <span class="display-regular">About</span>
                    <span class="display-extra_bold"> Me</span>
                </h2>

                <div class="wrapper-text_block">
                    <p>
                        Hi! My name is Vladyslav. I am a Software and Infrastructure Engineer who bridges the gap between writing efficient code and building resilient systems.
                    </p>
                    <p>
                        My tech journey began in 2021, and I recently graduated with a degree in Software Engineering. Over the past few years, my focus has evolved from building full-stack web applications and student startups to designing microservices and managing complex network infrastructures.
                    </p>
                    <p>
                        In my daily work, I combine my passion for backend development with deep expertise in networking, virtualization, and system administration. I strongly believe that to build truly productive, scalable, and easy-to-maintain applications, an engineer must understand the underlying hardware and networks they run on.
                    </p>
                    <p>
                        Outside of the terminal, I enjoy reading literature on psychology, philosophy, and self-development. I also keep myself active through athletics and regular gym workouts, and have recently added music to this list as well. My goal is to continuously grow as a skilled engineer, a well-rounded individual, and a great conversationalist.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useResponsiveAos } from "../../utils/aosHelper";
import AboutMePicture from "../../assets/covers/about-me.png";

export default defineComponent({
  name: "AboutMeSection",
  setup() {
    const aosTypeImage = useResponsiveAos("fade-right", "fade-down");
    const aosTypeStory = useResponsiveAos("fade-left", "fade-up");

    return {
      AboutMePicture,
      aosTypeImage,
      aosTypeStory,
    };
  },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

h2, p {
    margin: 0;
}

.inner-expirience_section {
    padding: 60px 80px;

    @media (max-width: 768px) {
        padding: 40px 16px;
    }
}

.wrapper-about_me_section {
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 80px;
    flex-wrap: wrap;
    align-items: start;
    overflow-x: clip;

    @media (max-width: 1260px) {
        padding: 0;
        gap: 20px;
        flex-direction: column;
        align-items: stretch;        
    }
}

@media (max-width: 1260px) {
  .aos-init[data-aos="fade-left"],
  .aos-init[data-aos="fade-right"] {
    transform: translate3d(0,0,0); /* без !important зазвичай достатньо */
  }
}

.wrapper-image {
    width: calc(40% - 32px - 32px);
    max-width: 526px;
    align-self: center;

    img.image-about_me {
        width: 100%;
        @include image.prevent-manipulations;
    }

    @media (max-width: 1260px) {
        width: 100%;
    }

}

.wrapper-story {
    width: calc(60% - 32px - 32px);

    @media (max-width: 1260px) {
        width: 100%;
    }


    h2.title {
        margin: 0;
        padding: 20px 0;
        text-align: left;
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

    .wrapper-text_block {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        gap: 20px;

        p {
            @include fonts.sora-font(400);
            @include fonts.responsive-font(16, 16, 1440);
            @include fonts.prevent-selecting;
            color: $zinc-500;
            letter-spacing: 0.32px;
            line-height: 150%;
        }
    }
}

</style>