<template>
    <div class="inner-project">
        <div :class="`wrapper-project ${align === Align.Right ? 'align-right' : 'align-left'}`">
            <div class="inner-project_image">
                <div class="wrapper-project_image">
                    <VueLoaderImage delay="1000" 
                                    :src="screenshoot"
                                    :alt="name" 
                                    width="100%"
                                    height="100%"
                                    pill="19px">
                        <div class="loader"/>
                    </VueLoaderImage>
                </div>
            </div>

            <div class="inner-project_info">
                <div class="wrapper-project_info">
                    <h3 class="project-number">
                        {{ number }}
                    </h3>
                    
                    <h4 class="project-name">
                        {{ name }}
                    </h4>

                    <p class="project-description">
                        {{ description }}
                    </p>

                    <div class="container-links">
                        <a v-if="link !== ''" class="project-link"
                            :href="link"
                            target="_blank"
                        >
                            <img class="image-link" :src="LinkIcon" :alt="link" />
                        </a>

                        <a v-if="sourceLink !== ''" class="project-link"
                            :href="sourceLink"
                            target="_blank"
                        >
                            <img class="image-link" :src="SourceIcon" :alt="link" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped lang="ts">
import { defineComponent } from 'vue';
import { Align } from '../../types/align';
import LinkIcon from '../../assets/icons/readmore-default.png';
import SourceIcon from '../../assets/icons/source.png';
import VueLoaderImage from 'vue3-loader-image';
import 'vue3-loader-image/dist/style.css'

function isValidLink(value: string): boolean {
  if (value === '') return true; // allow empty (not required)

  // allow hash anchors
  if (value.startsWith('#')) return true;

  // allow internal absolute path
  if (value.startsWith('/')) return true;

  // allow tel:
  if (/^tel:\+?[0-9()\-\s]+$/.test(value)) return true;

  // allow mailto:
  if (/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;

  // allow http/https absolute URLs
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export default defineComponent({
    name: "Project",
    data() {
        return({
            Align,
            LinkIcon,
            SourceIcon,
        });
    },
    components: {
        VueLoaderImage,
    },
    props: {
        align: {
            type: String,
            required: false,
            default: Align.Left,
            validator: (value: string) =>
                (Object.values(Align) as string[]).includes(value),
        },
        link: {
            type: String,
            required: false,
            default: "",
            validator: isValidLink,
        },
        sourceLink: {
            type: String,
            required: false,
            default: "",
            validator: isValidLink,
        },
        screenshoot: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";
@use "/src/assets/styles/shadow";

h3, h4, p {
    margin: 0;
}

.inner-project {
    background-color: $primary-black;
    padding: 59px 0;

    @media (max-width: 1260px) {
        padding: 0;
    }
}

.wrapper-project {
    display: flex;
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: center;

    &.align-left {
        flex-direction: row;
    }
    &.align-right {
        flex-direction: row-reverse;
    }

    @media (max-width: 1260px) {
        &, &.align-left, &.align-right {
            flex-direction: column;
            justify-content: space-between;
            gap: 28px;
        }
    }
}

.inner-project_image {
    border-radius: 19px;
    @include shadow.project-image-shadow;
}

.wrapper-project_image {
    max-width: 530px;
    width: 530px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include image.prevent-manipulations;

    .loader {
        width: 80px;
        aspect-ratio: 1;
        position: relative;

        &:before,
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            margin: -16px 0 0 -16px;
            width: 32px;
            aspect-ratio: 1;
            background: $primary-white;
            animation: l2-1 2s  infinite, l2-2 1s infinite ;
            transition: box-shadow ease 0.3s ease;
            @include shadow.loader-white-shadow;
        }

        &:after {
            background: $primary-neutral;
            animation-delay: -1s,0s;
        }
    }

    @keyframes l2-1 {
        0%   { top: 0   ; left: 0    }
        25%  { top: 100%; left: 0    }
        50%  { top: 100%; left: 100% }
        75%  { top: 0   ; left: 100% }
        100% { top: 0   ; left: 0    }
    }

    @keyframes l2-2 {
        40%, 50% { transform: rotate(0.25turn) scale(0.5) }
        100%     { transform: rotate(0.5turn) scale(1) }
    }

    @media (max-width: 1260px) {
        width: 100%;
        height: 400px;

        img {
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}

.inner-project_info {
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper-project_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 600px;
    gap: 28px;

    h3.project-number {
        @include fonts.sora-font(800);
        @include fonts.responsive-font(48, 24, 1440);
        @include fonts.prevent-selecting;
        text-align: start;
        color: $primary-white;
    }

    h4.project-name {
        @include fonts.sora-font(700);
        @include fonts.responsive-font(32, 20, 1440);
        @include fonts.prevent-selecting;
        text-align: start;
        color: $primary-white;
    }

    .project-description {
        @include fonts.sora-font(400);
        @include fonts.responsive-font(16, 16, 1440);
        @include fonts.prevent-selecting;
        letter-spacing: 0.32px;
        line-height: 150%;
        color: $zinc-500;
        white-space: pre-line;
    }

    .container-links {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 40px;
        width: max-content;
    }

    .project-link {
        cursor: pointer;
        width: max-content;
        height: max-content;
        transition: all 0.3s ease;

        &:hover,
        &:focus,
        &:focus-within {
            opacity: 0.7;
        }
        
        img.image-link {
            @include image.prevent-manipulations;
            filter: invert(1);
        }
    }

}


</style>