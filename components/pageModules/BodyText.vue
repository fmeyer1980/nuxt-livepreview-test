<template>
    <!-- <div class="bodyText-container" v-bind:class="(item.showSitebar)?'one-col':'two-col'"> -->
    
    <section class="body-text [ container-narrow ] [ pt-600 pb-600 ]" v-bind:class="(item.showSitebar)?'sitebar':'no-sitebar'">
        <article>
            <BlockContent className="page-content [ flow ] [ space-base-em ]" :blocks="item.body" :serializers="serializers" />
        </article>
        <aside v-if="item.showSitebar">
            <nav v-if="item.showSitebar" class="sitebar-nav [ bg-light p-400 rounded-mid ]">
                <ul class="sitebar-nav__menu [ flow ] [ space-xxs ]">
                    <li v-for="item in site.asideMenu" :key="item._key">
                        <nuxt-link :to="{name:'slug',params:{slug:item.slug.current}}" :title="item.name">{{ item.name }}</nuxt-link>
                    </li>
                </ul>
            </nav>
        </aside>
    </section>

</template>

<script>
    import {mapState} from 'vuex'
    import BlockContent from 'sanity-blocks-vue-component';
    import ContentImage from '@/components/ContentImage'
    import Youtube from '@/components/Youtube'

	export default {
		name: "BodyText",
        components: {BlockContent},
        props:{
            item: Object
        },
        data() {
            return {
                serializers: {
                    types: {
                        bodyImage: ContentImage,
                        youtube: Youtube,
                    }
                }
            }
        },
        computed:{
            ...mapState('sanity',{
                site: 'siteSettings'
            })
        },
    }
</script>

<style lang="scss" scoped>
    @import './assets/scss/config';
    $outputTokenCSS: false;
    @import './node_modules/gorko/gorko.scss';

.sitebar{

    @include media-query('lg'){
        display: grid;
        gap: get-size('600');
        grid-template-columns: 1fr 20rem;
    }
}

.sitebar-nav{
    position: sticky;
    top: get-size('gutter');
    z-index: 50;
    display: none;

    a[aria-current]{
        @include apply-utility('weight','black')
    }

    @include media-query('lg'){
        display: block;
    }
}

</style>