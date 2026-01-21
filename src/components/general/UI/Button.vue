 <template>
    <div :class="[
          'wrapper',
          size === ButtonSize.Small ? 'small' : 'medium',
          isPressed ? 'active' : ''
         ]"
        @mousedown="handleMouseAction"
        @mouseup="handleMouseAction"
    >
      <div class="image_wrapper"
        v-if="iconPosition === ButtonIconPosition.Left || iconPosition === ButtonIconPosition.LeftAndRight || iconPosition === ButtonIconPosition.Center"
      >
        <img :src="icon" :alt="`Icon ${iconPosition}`" />
      </div>

      <p v-if="label !== '' && iconPosition != ButtonIconPosition.Center">{{ label }}</p>

      <div class="image_wrapper"
        v-if="iconPosition === ButtonIconPosition.Right || iconPosition === ButtonIconPosition.LeftAndRight"
      >
        <img :src="icon" alt="Icon right" />
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue'
  import { ButtonSize } from '@/types/button-types/button-size.ts';
  import { ButtonIconPosition } from "@/types/button-types/button-icon-position.ts";
  import { ButtonState } from "@/types/button-types/button-state.ts";
  import DownloadIcon from "@/assets/icons/download.png";

  export default defineComponent({
    name: "Button",
    data() {
      return {
        ButtonSize,
        ButtonIconPosition,
        ButtonState,
        isPressed: this.state !== ButtonState.Active ? false : true,
      };
    },
    props: {
      size: {
        type: String,
        default: ButtonSize.Medium,
        required: false,
        validator: (value: string) =>
            (Object.values(ButtonSize) as string[]).includes(value),
      },
      iconPosition: {
        type: String,
        default: ButtonIconPosition.None,
        required: false,
        validator: (value: string) =>
            (Object.values(ButtonIconPosition) as string[]).includes(value),
      },
      state: {
        type: String,
        default: ButtonState.Default,
        required: false,
        validator: (value: string) =>
            (Object.values(ButtonState) as string[]).includes(value),
      },
      icon: {
        type: String,
        default: DownloadIcon,
        required: false,
      },
      label: {
        type: String,
        required: false,
        default: '',
      }
    },
    methods: {
      handleMouseAction() {
        this.isPressed = !this.isPressed;
      },
    },
  })
  </script>

  <style scoped lang="scss">
  @use "/src/assets/styles/fonts" as *;
  @use "/src/assets/styles/colors" as *;
  @use "/src/assets/styles/image";

  .wrapper {
    @include sora-font(600);
    @include responsive-font(20, 16, 1440);
    color: $primary-white;
    background-color: $primary-black;
    border: 2px solid $primary-black;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    width: max-content;
    height: max-content;
    cursor: pointer;
    transition: all 0.25s ease;

    p {
      margin: 0;
      @include prevent-selecting;
    }

    .image_wrapper {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        @include image.prevent-manipulations;
        transition: filter 0.3s ease, transform 0.3s ease;  
        filter: invert(1);
      }
    }

    &:hover {
      background-color: $primary-neutral;
      border-color: $primary-neutral;

      .image_wrapper img {
        transform: scale(1.1);
      }
    }

    &.active {
      background-color: lighten($primary-white, 20%);
      border-color: darken($primary-black, 10%);
      color: $primary-black;
      transform: scale(0.97);
      //box-shadow: 0 0 0 4px rgba($primary-black, 0.2);

      .image_wrapper {
        img {
          filter: invert(0);
        }
      }
    }

    &:focus,
    &:focus-visible,
    &:focus-within {
      outline: none;
    }

    &.medium {
      padding: 16px 20px;

      @media (max-width: 768px) {
        padding: 14px 16px;
      }
    }

    &.small {
      padding: 14px 16px;
    }
  }

</style>