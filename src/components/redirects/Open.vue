<template>
    <div class="loader_wrapper">
        <Loader :theme="Theme.Light"
                class="loader" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Loader from '../UI/Loader.vue';
import { Theme } from '../../types/theme';

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
        };
    },
    components: {
        Loader,
    },
    props: {
        path: {
            type: String,
            required: false,
            validator: (value: string) => isValidLink(value),
        },
        timeout: {
            type: Number,
            default: 1000,
            required: false,
        },
    },
    setup(props) {
        onMounted(() => {
            setTimeout(() => {
                if (props.path && isValidLink(props.path)) {
                    window.location.href = props.path;
                } else {
                    window.location.href = '/';
                }
            }, props.timeout);
        });
    },
});
</script>

<style lang="scss" scoped>
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
}
</style>