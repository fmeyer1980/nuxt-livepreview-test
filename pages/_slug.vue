<template>
<div>
    <client-only>
        <PreviewBanner v-if="$nuxt.isPreview" />
    </client-only>
    <PageHeader v-if="!pages.hidePageHeader" :pages="pages" />
    <div class="pagemodules">
        <component v-for="item in pages.pageModules" :key="item._id" :is="componentMap[item._type]" :item="item" />
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import { groq } from '@nuxtjs/sanity'

import PageHeader from '@/components/PageHeader'
import BodyText from '@/components/pageModules/BodyText'
import HowToUse from '@/components/pageModules/HowToUse'
import Intro from '@/components/pageModules/Intro'
import PriceList from '@/components/pageModules/PriceList'
import CoverImage from '@/components/pageModules/CoverImage'
import ContactForm  from '@/components/pageModules/ContactForm'
import PreviewBanner  from '@/components/PreviewBanner'



// const query = groq`*[_type == "pages" && slug.current == $slug] | order(_updatedAt desc) {
//     meta{
//         title,
//         description
//     },
//     name,
//     slug,
//     headline,
//     summary,
//     showSitebar,
//     hidePageHeader,
//     pageModules[]{
//         _key,
//         products[]->,
//         ...,
//     }
// }[0]`

// export default {
//     name: 'Pages',
//     validate({ params, store, query }) {
//         // If FALSE redirect to 404 page
//         return (
//         query.preview === 'true' || store.state.pagesSlugs.includes(params.pages)
//         )
//     },
//     asyncData({ $sanity, params, payload }) {
//         if (payload) {
//         return { pages: payload }
//         }
//         return $sanity.fetch(query, {
//         slug: params.pages,
//         })
//     },
//     components: {PageHeader,PreviewBanner},
//     computed:{
//         ...mapState('sanity',{
//             site: 'siteSettings'
//         })
//     },
//     data(){
//         return {
//             componentMap: {
//                 bodyText: BodyText,
//                 howToUse: HowToUse,
//                 intro: Intro,
//                 priceList: PriceList,
//                 coverImage: CoverImage,
//                 contactForm: ContactForm,
//             },
//         }
//     },
//     head() {
//         let title = this.pages.name;
//         let description = '';

//         if(typeof this.pages.meta !== 'undefined')
//         { 
//             if(typeof this.pages.meta.title !== 'undefined') title = this.pages.meta.title ;  
                
//             if(typeof this.pages.meta.description !== 'undefined') description = this.pages.meta.description;  
//         }
//         return {
//             // titleTemplate: "%s - " + this.pages.meta.title,
//             title: title,
//             meta: [
//                 {
//                     hid: 'description',
//                     name: "description", 
//                     content: description
//                 }
//             ]
//         }
//     },
// }



export default {
    async asyncData({ params, $sanity }) {
        const query = groq`*[_type == "pages" && slug.current == "${params.slug}"] | order(_updatedAt desc) {
            meta{
                title,
                description
            },
            name,
            slug,
            headline,
            summary,
            showSitebar,
            hidePageHeader,
            pageModules[]{
                _key,
                products[]->,
                ...,
            }
        }[0]`
        const pages = await $sanity.fetch(query)
        return { pages }
    },
    name: 'Pages',
    components: {PageHeader,PreviewBanner},
    computed:{
        ...mapState('sanity',{
            site: 'siteSettings'
        })
    },
    data(){
        return {
            componentMap: {
                bodyText: BodyText,
                howToUse: HowToUse,
                intro: Intro,
                priceList: PriceList,
                coverImage: CoverImage,
                contactForm: ContactForm,
            },
        }
    },
    head() {

        let title = this.pages.name;
        let description = '';

        if(typeof this.pages.meta !== 'undefined')
        { 
            if(typeof this.pages.meta.title !== 'undefined') title = this.pages.meta.title ;  
              
            if(typeof this.pages.meta.description !== 'undefined') description = this.pages.meta.description;  
        }
        return {
            // titleTemplate: "%s - " + this.pages.meta.title,
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: "description", 
                    content: description
                }
            ]
        }
    },
}

</script>

<style lang="scss">
.pagemodules{
    > .body-text:first-child{
        padding-top: 0;
    }
}

</style>
