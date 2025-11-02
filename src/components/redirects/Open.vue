<template>
    <div class="loader_wrapper">
         <Loader    v-if="!showTimeoutError"
                    :theme="Theme.Light"
                    class="loader" />
    
        <div v-else class="error_message">
            <h4 class="text">{{ timeoutMessage }}</h4>
            
            <Button :label="buttonLabel"
                    :size="ButtonSize.Medium"
                    :icon="RetryIcon"
                    :iconPosition="ButtonIconPosition.Right"
                    class="try_again_button"
                    @click="tryAgain" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Loader from '../UI/Loader.vue';
import { Theme } from '../../types/theme';
import Button from '../UI/Button.vue';
import { ButtonSize } from '../../types/button-types/button-size';
import RetryIcon from '../../assets/icons/retry.svg';
import { ButtonIconPosition } from '../../types/button-types/button-icon-position';

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
    name: "Open",
    data() {
        return {
            Theme,
            ButtonSize,
            RetryIcon,
            ButtonIconPosition,
        };
    },
    components: {
        Loader,
        Button,
    },
    props: {
        path: {
            type: String,
            required: false,
            validator: (value: string) => isValidLink(value),
        },
        delay: {
            type: Number,
            default: 1000,
            required: false,
        },
        timeout: {
            type: Number,
            default: 5000,
            required: false,
        },
        timeoutMessage: {
            type: String,
            default: "Hmm… the magic didn’t work this time.",
            required: false,
        },
        buttonLabel: {
            type: String,
            default: "Try again!",
            required: false,
        },
    },
    setup(props) {
        const TRY_AGAIN_DELAY: number = 300;

        const showTimeoutError = ref(false);

        const doRedirect = () => {
            if (props.path && isValidLink(props.path)) {
                window.location.href = props.path;
            } else { 
                window.location.href = '/';
            }
        }

        const tryAgain = () => {
            showTimeoutError.value = false;
            
            setTimeout(() => {
                doRedirect();
                
            }, TRY_AGAIN_DELAY);

            setTimeout(() => {
                showTimeoutError.value = true;
            }, props.timeout);        
        };

        onMounted(() => {
            setTimeout(() => {
                doRedirect();
            }, props.delay);
            
            setTimeout(() => {
                showTimeoutError.value = true;
            }, props.timeout);
        });

        return { showTimeoutError, tryAgain };
    },
});
</script>

<style lang="scss" scoped>
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;

.loader_wrapper {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
        transform: scale(2.5);
    }

    @media (max-width: 1260px) {
        .loader {
            transform: scale(1.5);
        }
    }

    .error_message {
        .text {
            @include fonts.sora-font(700);
            @include fonts.responsive-font(32, 20, 1440);
            @include fonts.prevent-selecting;
            text-align: center;
            color: $primary-black;
        }

        .try_again_button {
            margin: 15px auto 0;
        }
    }
}
</style>