<template>
    <section class="signup-form">

        <div v-if="success">
            <div class="page-content [ flow ] []">
                <p>Fedt at du vil være med på Moooce, vi håber selvfølgelig at du vil blive rigtig glad for det!</p>
                <p>Nu skal du installere Shopify app’en på din Shopify store, det gør du ved nedenstående link.</p>
            </div>
            <div class="[ cluster-grow ] [ bg-primary color-light-glare space-xs p-100 items-center rounded-mid mt-400 lg:rounded-xl ]">
                <span>Klik her og installer Shopify App.</span>
                <button class="btn" data-type="secondary">Installer Moooce</button>
            </div>
        </div>
        <form class="[] [ d-grid cols-6 gap-200 text-xs ]" v-else name="Moooce tester" method="POST" action="/signup/success/" netlify>
            <label class="[ span-2 ]">
                <span>CVR nr.<sup>*</sup></span>
                <input type="text" name="cvr" required>
            </label>
            <label class="[ span-6 ]">
                <span>Virksomhed<sup>*</sup></span>
                <input type="text" name="company" required>
            </label>
            <label class="[ span-2 ]">
                <span>Land<sup>*</sup></span>
                <div class="select">
                    <select name="country" >
                        <option value="" selected></option>
                        <option value="dk">Danmark</option>
                    </select>
                    <div class="focus"></div>
                </div>
            </label>
            <div class="form-text [ span-3 ]">
                <a href="/">Oh Oh.. Your Country is not in the list?</a>
            </div>
            <label class="[ span-6 ]">
                <span>Adresse<sup>*</sup></span>
                <input type="text" name="adresse" required>
            </label>
            <label class="[ span-2 ]">
                <span>Postnummer<sup>*</sup></span>
                <input type="number" name="postnummer" required>
            </label>
            <label class="[ span-4 ]">
                <span>By<sup>*</sup></span>
                <input type="text" name="by" required>
            </label>
            <label class="[ span-6 ]">
                <span>Email (Til kontakt)<sup>*</sup></span>
                <input type="email" name="email" required>
            </label>
            <label class="[ span-6 ]">
                <span>Din E-COMMERCE URL<sup>*</sup></span>
                <input type="url" name="url" value="https://" required>
            </label>
            <label class="[ span-2 ]">
                <span>E-commerce platform<sup>*</sup></span>
                <div class="select">
                    <select id="country" name="country" >
                        <option value="" selected></option>
                        <option value="Shopify">Shopify</option>
                    </select>
                    <div class="focus"></div>
                </div>
            </label>
            <div class="form-text [ span-4 ]">
                <a href="/">Oh Oh.. Your system is not in the list?</a>
            </div>
            <label class="[ span-3 ]">
                <span>Vælg et password<sup>*</sup></span>
                <input type="password" name="password" minlength="6" required>
            </label>
            <label class="[ span-3 ]">
                <span>Gentag password<sup>*</sup></span>
                <input type="password" name="password" minlength="6" required>
            </label>
            <div class="signup-form__start [ span-6 bg-primary p-200 mt-200 ]">
                <div class="[ cluster-grow ] [ space-100 ]">
                    <Checkbox>Jeg har læst <nuxt-link class="[ underline weight-black ]" to="/handelsbetingelser/" >handelsbetingelserne</nuxt-link> Jeg vil gerne igang tak.</Checkbox>
                    <button name="subscribe" id="mc-embedded-subscribe" class="btn" data-type="secondary">Start nu</button>
                </div>
            </div>
            <input type="hidden" name="form-name" value="Moooce tester" />
        </form>
    </section>
</template>

<script>
import Checkbox from '@/components/Checkbox'

export default {
    name: "TesterForm",
    components: {Checkbox},
    props:{
        success: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.signup-form{

    form{
        > label, .form-text{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            span{
                margin-bottom: .2em;
            }
        }
    }


    &__start{
        @include apply-utility('rounded','mid');

        @include media-query('md'){
            border-radius: 10rem;
        }
    }
}

</style>