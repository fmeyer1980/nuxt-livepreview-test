<template>
    <section class="newsletter [ container ] [ bg-primary color-light-glare pt-900 pb-900 ]">
        <div>
            <div class="[ flow ] [ color-secondary space-300 ]">
                <p class="h1 [] [ text-500 measure-micro-xs ]" v-text="home.newsletter.headline" />
                <p class="[] [ text-300 leading-tight weight-bold measure-compact space-xs ]" v-text="home.newsletter.subHeadline" />
                <p class="[] [ text-100 weight-bold measure-mid ]" v-text="home.newsletter.text" />
            </div>
            <form class="[ flow ] [ text-xs space-100 ] validate" action="https://moooce.us7.list-manage.com/subscribe/post?u=93d25ee394f02c0ad09b11311&amp;id=9509cc543a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                <label class="input-label">
                    <span>Navn *</span>
                    <input type="text" value="" name="NAME" class="required">
                </label>
                <label class="input-label">
                    <span>E-mail *</span>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                </label>
                <label class="input-label">
                    <span>Url til din webshop(hvis du har en)</span>
                    <input type="url" value="" name="WEBSITE" class=" url" id="mce-WEBSITE">
                </label>
                <div class="[ cluster-grow ] [ space-100 ]">
                    <Checkbox>Ja, I må gerne sende mig emails.</Checkbox>
                    <button name="subscribe" id="mc-embedded-subscribe" class="btn" data-type="secondary">Start nu</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import Checkbox from '@/components/Checkbox'
	export default {
		name: "NewsletterSignUp",
        components: {Checkbox},
		props: {
			home: Object,
		}
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

    .newsletter{

        > div{
            display: flex;
            flex-wrap: wrap;
            margin: calc(-1 * var(--size-400));

            > * {
                margin: get-size('400');
            }

            > div {
                flex-basis: 0;
                flex-grow: 999;
                min-width: 40%;
            }

            > form{
                flex-basis: 25rem;
                min-height: 20rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;

                @include media-query('xl'){
                    flex-basis: 30rem;
                }

                .input-label{
                    display: flex;
                    flex-direction: column;

                    span{
                        margin-bottom: .3em;
                    }
                }

                input{
                    background-color: get-color('light');
                    color: get-color('dark-shade');
                    border: none;
                    padding: .8em 1.2em;
                    @include apply-utility('rounded', 'small');
                    &:focus{
                        outline: 2px solid get-color('secondary');
                    }
                }

                button{
                    background-color: get-color('secondary');
                    align-self: flex-start;
                }
            }

        }
     
    }
</style>