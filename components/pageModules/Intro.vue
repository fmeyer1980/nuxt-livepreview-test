<template>
    <section class="intro-modul [] [ pt-xl pb-lg ]">
        <img v-if="item.bgImage.asset" :src="$urlFor(item.bgImage).width(1600).quality(70)" :alt="item.bgImage.alt" loading="lazy" />
        <div class="content [ container-narrow flow ] [ space-400 ]">
            <div class="[ flow ] [ space-xs ]">
                <h1 v-text="item.headline" />
                <p class="[ text-300 measure-compact leading-tight ]" v-if="item.subHeadline" v-text="item.subHeadline" />
            </div>
            <div class="content__box [ bg-primary color-light-glare p-600 rounded-large lg:ml-600 ]">
                <SanityContent class="[ page-content flow ] [ space-base-em ]" :blocks="item.body" />
                <div class="buttons cluster [ mt-200 space-100 ]" v-if="item.facebookUrl || item.linkUrl">
                    <a class="h-400" :v-if="item.facebookUrl" :href="item.facebookUrl" target="_blank" title="Moooce community på Facebook">
                        <FacebookSvg class="[] [ fill-current h-full ]" />
                    </a>
                    <a class="btn" data-type="secondary" :v-if="item.linkUrl" :href="item.linkUrl" target="_blank" title="Moooce community på Facebook">{{ item.linkText }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
    import FacebookSvg from '@/components/svg/FacebookSvg'
	export default {
		name: "Intro",
        components: {SanityContent,FacebookSvg},
        props:{
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
@import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.intro-modul{
    position: relative;
    
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content{
        position: relative;
        z-index: 1;

        &__box{
            max-width: 35rem;
           
            // .buttons{
            //     display: flex;
            //     flex-wrap: wrap;
            //     gap: var(--size-xs);
            //     align-items: center;
            // }
        }
    }
}
</style>