<template>
    <div class="wrapper-footer">
        <Logo class="logo-inverted" />

        <div class="special_thanks">
            <p class="special_thanks-text"> 
                Inspired by    
                <a href="https://www.figma.com/@jhanvishah" target="_blank">
                    @jhanvishah
                </a>
            </p>
            
            <p class="special_thanks-text"> 
                Developed in Vue
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/general/UI/Logo.vue';

export default defineComponent({
    name: "Footer",
    data() {
        return({

        });
    },
    components: {
        Logo,
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

p, a {
    text-decoration: none;
    margin: 0;
}

.wrapper-footer {
    width: calc(100% - 80px - 80px);
    padding: 24px 80px;
    background-color: $primary-black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: calc(100% - 16px - 16px);
        padding: 20px 16px;
    }
}

.logo-inverted {
    filter: invert(1);
    @include fonts.prevent-selecting;
    @include image.prevent-manipulations;
}

.special_thanks {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;

    @media (max-width: 768px) {
        gap: 5px;
    }

    &-text {
        @include fonts.sora-font(600);
        @include fonts.responsive-font(16, 12, 1440);
        color: $primary-white;

        a {
            color: $primary-white;
        }
    }
}

</style>