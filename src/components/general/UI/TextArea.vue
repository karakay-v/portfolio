<template>
  <div class="wrapper">
    <div class="input_container">
      <textarea
        :value="data"
        :class="`state-${state} ${isFocused ? 'focused' : ''} ${errorMessage !== '' ? 'error' : ''}`"
        :disabled="state === InputState.Disabled"
        :maxlength="maxLength"
        @input="handleInput"
        @focus="isFocused = true"
        @blur="handleBlur"
      />

      <label :class="`floating_label ${ isFocused || data ? 'active' : '' } ${state === InputState.Disabled ? 'disabled' : ''}`">
        {{ placeholder }}
      </label>
    </div>

    <label :class="`message ${errorMessage !== '' ? 'active' : ''}`">{{ errorMessage }}</label>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { InputState } from '@/types/input-types/input-state';
  import { InputDataTypes } from '@/types/input-types/input-data-types';

  export default defineComponent({
    name: "TextArea",
    data() {
      return {
        InputState,
        InputDataTypes,
        isFocused: this.state !== InputState.Focused ? false : true,
        errorMessage: "",
      };
    },
    props: {
      data: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        default: InputState.Default,
        required: false,
        validator: (value: string) =>
            (Object.values(InputState) as string[]).includes(value),
      },
      required: {
        type: Boolean,
        default: false,
        required: false,
      },
      placeholder: {
        type: String,
        default: "",
        required: false,
      },
      maxLength: {
        type: Number,
        default: 500,
        required: false,
      },
    },
    emits: ['update:data'],
    methods: {
      handleInput(event: Event) {
        const target = event.target as HTMLInputElement | null;
        if (target) {
          const value = target.value;
          this.$emit('update:data', value);
        }
      },
      handleBlur(event: Event) {
        this.isFocused = false;
        const target = event.target as HTMLInputElement;
        this.validateInput(target.value);
      },
      validateInput(value: string) {
        if (this.required && value === "") {
        /***      If field is required or user typed some characters into input      ***/
          this.errorMessage = "This field cannot be empty";
          return false;
        }

        /***      If all is good:      ***/
        this.errorMessage = "";
        return true;
      }
    }
  })
</script>

<style scoped lang="scss">
  @use "/src/assets/styles/fonts" as *;
  @use "/src/assets/styles/colors" as *;
  @use "/src/assets/styles/image";
  @use "/src/assets/styles/shadow";

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 5px;
    width: calc(100% - 5px - 5px);
    max-width: 500px;
  }

  .input_container {
    position: relative;
    display: inline-block;
    cursor: text;
    width: 100%;

    textarea {
      // Minus 44px for paddings and 4px for borders
      width: calc(100% - 44px - 4px);
      min-height: 70px;
      max-height: 140px;
      resize: none;
      padding: 16px 22px;
      border-radius: 4px;
      border: 2px solid $primary-black;
      @include sora-font(400);
      @include responsive-font(16, 16, 1440);
      transition: 0.3s ease background-color, 0.3s ease box-shadow, 0.3s ease color, 0.3s ease border-color;
      background-color: $primary-white;
      color: $primary-black;

      &.focused {
        @include shadow.input-shadow;
      }

      &.error {
        color: $error-500;
        border-color: $error-500;
      }
      
      &[disabled] {
        color: $zinc-300;
        border-color: $zinc-200;
        background-color: $zinc-100;
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: none;
      }
    }

    .floating_label {
      position: absolute;
      left: 24px;
      top: 18px;
      color: $zinc-500;
      opacity: 1;
      transition: 0.3s ease opacity, 0.3s ease color;
      pointer-events: none;

      @include sora-font(400);
      @include responsive-font(16, 16, 1440);
      @include hide-overflowed-text;
      width: calc(100% - 48px);


      &.active {
        color: $primary-black;
        opacity: 0;
      }

      &.disabled {
        color: $zinc-300 !important;
      }
    }

    &:hover {
      input {
        background-color: $zinc-100;
      }

      .floating_label {
        color: $primary-neutral;
      }
    }

  }

  .message {
    @include sora-font(400);
    @include responsive-font(16, 16, 1440);
    color: $error-500;
    transition: 0.3s ease opacity;
    opacity: 0;

    &.active {
        opacity: 1;
    }
  }
</style>