<template>
    <div id="contact-me" class="inner-contact_me_section">
        <div class="wrapper-contact_me_section">
            <div :data-aos="aosForm" class="wrapper-form">
                <TextInput  :type="InputDataTypes.Text"
                            v-model:data="name"
                            :required="true"
                            placeholder="Your name" />
                
                <TextInput  :type="InputDataTypes.Email"
                            v-model:data="email"
                            :required="true"
                            placeholder="Email" />
                
                <TextInput  :type="InputDataTypes.URL"
                            v-model:data="website"
                            :required="false"
                            placeholder="Your website (If exists)" />
                
                <TextArea   v-model:data="message"
                            :required="true" 
                            placeholder="How can I help?" />
                
                <div class="container-buttons">
                    <Button label="Get In Touch" 
                            :size="ButtonSize.Small" 
                            class="send_button-mobile"
                            @click="handleForm" />

                    <div class="container-social_buttons">
                        <Button label="Get In Touch" 
                                :size="ButtonSize.Small"
                                class="send_button-pc"
                                @click="handleForm" />

                        <Button :icon="LinkedInIcon" 
                                :icon-position="ButtonIconPosition.Center" 
                                :state="ButtonState.Active" 
                                @click="openLink('https://linkedin.com/in/karakay-v/')" />
                        <Button :icon="GitHubIcon" 
                                :icon-position="ButtonIconPosition.Center" 
                                :state="ButtonState.Active"
                                @click="openLink('https://github.com/Karakay-V/')" />
                        <Button :icon="RedditIcon" 
                                :icon-position="ButtonIconPosition.Center" 
                                :state="ButtonState.Active"
                                @click="openLink('https://www.reddit.com/user/donky_HOT/')" />
                        <Button :icon="DiscordIcon" 
                                :icon-position="ButtonIconPosition.Center" 
                                :state="ButtonState.Active"
                                @click="openLink('https://discordapp.com/users/karakay/')" />
                    </div>
                </div>
            </div>

            <div :data-aos="aosEncouragingText" class="wrapper-encouraging_text">
                <div class="container-text">
                    <h3 class="title">
                        <span class="display-extra_bold">Let’s</span>
                        <span class="outlined-extra_bold"> talk</span>
                        <span class="display-extra_bold"> for</span>
                        <br />
                        <span class="display-extra_bold">Something</span>
                        <span class="display-extra_bold"> special</span>
                    </h3>

                    <p class="text">
                        I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                    </p>
                </div>

                <div class="container-contacts">
                    <h4 class="contact-email">
                        <a href="mailto: hitechnic00074220@gmail.com">
                            hitechnic00074220@gmail.com
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import emailjs from "@emailjs/browser";
import TextInput from "../UI/TextInput.vue";
import TextArea from "../UI/TextArea.vue";
import Button from "../UI/Button.vue";
import { ButtonIconPosition } from '../../types/button-types/button-icon-position';
import { ButtonState } from '../../types/button-types/button-state';
import { ButtonSize } from "../../types/button-types/button-size";
import LinkedInIcon from '../../assets/icons/linkedin.png';
import GitHubIcon from '../../assets/icons/github.png';
import RedditIcon from '../../assets/icons/reddit.png';
import DiscordIcon from '../../assets/icons/discord.png';
import { InputDataTypes } from "../../types/input-types/input-data-types";
import { useResponsiveAos } from "../../utils/aosHelper";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


export default defineComponent({
    name: "ContactMe",
    data() {
        return({
            LinkedInIcon,
            GitHubIcon,
            RedditIcon,
            DiscordIcon,
            ButtonIconPosition,
            ButtonState,
            ButtonSize,
            InputDataTypes,
            aosForm: useResponsiveAos('fade-right', 'fade-up'),
            aosEncouragingText: useResponsiveAos('fade-left', 'fade-up'),
            name: ref(""),
            email: ref(""),
            website: ref(""),
            message: ref(""),
            status: ref(""),
        });
    },
    components: {
        TextInput,
        TextArea,
        Button,
    },
    methods: {
        openLink(url: string) {
            window.open(`/redirect?to=${url}`, '_blank');
        },
        validateForm(): boolean {
            if (!this.name?.trim()) {
                return false;
            }

            if (!this.email?.trim()) {
                return false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
                return false;
            }

            if (this.website != "") {
                try {
                    new URL(this.website);
                } catch (_) {
                    return false;
                }
            }

            if (!this.message?.trim()) {
                return false;
            }

            return true;
        },
        handleForm() {
            if (!this.validateForm()) {
                toast.error("Fill in name, email & message 😎", {
                    position: "top-center",
                    transition: "slide",
                });
                return;
            }

            const promise = this.send();

            toast.promise(
                promise,
                {
                    pending: "Sending your message…",
                    success: "Your message has been sent successfully! 👌",
                    error: "Failed to send your message. 🤯",
                },
                {
                    position: "top-center",
                    transition: "slide",
                }
            );
        },
        async send() {
            return emailjs.send(
                "service_ipe8ev5",
                "template_mwohn93",
                {
                    name: this.name,
                    email: this.email,
                    website: this.website,
                    message: this.message,
                },
                "kW1fSvVuKQw-YPLDf"
            ).then(result => {
                if (result.status !== 200) {
                    throw new Error(result.text || "Unknown error");
                }

                console.log("Message sent successfully:", result);

                this.name = "";
                this.email = "";
                this.website = "";
                this.message = "";

                return result;
            }).catch(error => {
                console.error("Failed to send email:", error);
                throw error;
            });
        },
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

h3, h4, p, span, a {
    margin: 0;
    text-decoration: none;
}

.inner-contact_me_section {
    padding: 60px 80px;

    @media (max-width: 1260px) {
        padding: 40px 16px
    }
}

.wrapper-contact_me_section {
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px 108px;

    @media (max-width: 1260px) {
        gap: 20px 10%;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
}

.wrapper-form {
    flex: 1;
    width: max-content;
    max-width: 510px;

    @media (max-width: 768px) {
        width: 100%;
    }

    .container-buttons {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;

        .send_button-mobile {
            display: none;
        }
        
        @media (max-width: 1260px) {
            .send_button-pc {
                display: none;
            }

            .send_button-mobile {
                display: block;
            }
        }
    }

    .container-social_buttons {
        width: calc(100% - 10px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 1260px) {
            justify-content: start;
            gap: 24px;
        }

        @media (max-width: 768px) {
            width: max-content;
        }
    }
}

.wrapper-encouraging_text {
    flex: 1;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px) {
        gap: 32px;
        max-width: 510px;
    }

    .container-text {
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px) {
            gap: 32px;
        }

        h3.title {
            white-space: nowrap;
            @include fonts.responsive-font(48, 28, 1440);
            @include fonts.prevent-selecting;
            
            span {
                &.display-regular {
                    @include fonts.sora-font(400);        
                }

                &.display-extra_bold {
                    @include fonts.sora-font(800);
                }

                &.outlined-extra_bold {
                    @include fonts.sora-font(800);
                    @include fonts.stroke(3, $primary-black);
                    letter-spacing: 1px;
                    color: $primary-white;

                    @media (max-width: 1260px) {
                        @include fonts.stroke(2, $primary-black);
                    }
                }
            }
        }
        
        p.text {
            @include fonts.sora-font(400);
            @include fonts.responsive-font(16, 16, 1440);
            @include fonts.prevent-selecting;
            letter-spacing: 0.32px;
            line-height: 150%;
            color: $zinc-500;
        }
    }

    .container-contacts {
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px) {
            gap: 12px;
        }

        h4.contact-email {
            @include fonts.sora-font(600);
            @include fonts.responsive-font(28, 20, 1440);
            color: $primary-black;
            
            a {
                color: $primary-black;
            }
        }
    }
}

</style>