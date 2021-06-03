<template>
<div class="system">
    <div class="system__inner-wrapper [ flow ] [ color-light-glare space-400 md:space-300 ]">
        <div>
            <ul class="system__logos [ flow ] [ space-500 md:space-none ]">
                <li v-for="item in home.systems.logos" :key="item._key">
                    <img 
                        loading="lazy" 
                        :width="item.image.imageWidth" 
                        :height="item.image.imageHeight" 
                        :srcset="$urlFor(item.image).height(50).quality(70).auto('format') + ' 1x, ' + $urlFor(item.image).height(100).quality(70).auto('format') + ' 2x'" :alt="home.intro.productImage.alt" />
                    <span v-if="item.comingSoon" class="[ text-xxs color-primary-glare weight-bold ]">På vej</span>
                    <span v-else class="[ text-xxs color-secondary weight-bold text-transform-up ] ">Online</span>
                </li>
            </ul>
        </div>
        <h2 class="[ text-200 leading-tight ]" v-text="home.systems.headline" />
        <!-- <button class="btn d-hidden md:d-flex" data-type="secondary" @click="goToGetStarted" id="get-started-brand">{{ home.systems.linkText }}</button> -->
        <svg class="system__bg [ color-primary-shade fill-current ]" viewBox="0 0 1165 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.02 15.42C7.96 9.4 4.46 7.87.62.5h1163.81c-3.92 7.5-7.18 8.89-36.41 15.43-364.07 81.46-726.04 81.3-1093-.5z" /></svg>
    </div>
</div>
</template>

<script>
    import goToGetStarted from "@/mixin/goToGetStarted";

	export default {
		name: "SiteHeader",
        props:{
            home: Object
        },
        mixins: [goToGetStarted]
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';


.system{
    
    @include media-query('lg'){
        padding-left: calc(((100% - var(--container-width-narrow)) / 2) - var(--gutter));
        padding-right: calc(((100% - var(--container-width-narrow)) / 2) - var(--gutter));
        border-left: var(--gutter) solid transparent;
        border-right: var(--gutter) solid transparent;
    }

    &__inner-wrapper{
        position: relative;
        background-color: get-color('primary-shade');
        padding: get-size('700') get-size('800') get-size('800') get-size('800');
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        z-index: 10;

        @include media-query('lg'){
            margin-top: calc(-1 * var(--size-lg));
            border-radius: 15px 15px 0 0;
        }
    }


    &__bg{
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        z-index: -1;
        transform: translateY(100%);
    }

    &__logos{

        @include media-query('md'){
            display: flex;
            justify-content: space-between;
        }

        li{
            position: relative;
            padding: 0 get-size('400');
            display: flex;
            align-items: center;

            &:nth-child(2){
                padding-top: .8rem;
            }

            img{
                width: 100%;
            }
            
            span{
                position: absolute;
                top: -.7em;
                right: 0;
                display: flex;

                &::before{
                    content: "";
                    width: .9em;
                    height: .9em;
                    background-color: currentColor;
                    @include apply-utility('rounded','xs');
                    margin-right: .4em;
                    margin-top: .2em;
                }
            }
        }

    }
}
</style>