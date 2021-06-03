<template>
<div>
    <client-only>
        <PreviewBanner v-if="$nuxt.isPreview" />
    </client-only>
    <PostBanner :headline="postLandingPage.headline" :summary="postLandingPage.summary" :image="postLandingPage.mainImage" />
    <div class="posts">
        <!-- <a v-bind:href="'/blog'+ post.slug.current" v-text="post.name" /> -->
        <!-- <nuxt-link :to="{name:'blog-slug' , params:{slug:post.slug.current} }" aria-label="Gå til forsiden">{{ post.name }}</nuxt-link> -->
        <div class=" [ container-narrow flow ] [ pt-800 pb-800 space-600 ]" >
            <PostCard v-for="item in postLandingPage.posts" :key="item._id" :item="item" />
        </div>
    </div>
</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import PostBanner from "@/components/PostBanner";
import PostCard from "@/components/PostCard";
import PreviewBanner from '@/components/PreviewBanner'

export default {
    async asyncData({ $sanity }) {
        const query = groq`*[_type == "postLandingPage"]{
            meta{
                title,
                description
            },
            headline,
            summary,
            mainImage,
            "posts": *[_type == "post"]{
                name,
                slug,
                headline,
                summary,
                mainImage
            }
        }[0]`
        const postLandingPage = await $sanity.fetch(query)
        return { postLandingPage }
    },
    components: {PostBanner,PostCard,PreviewBanner},
    head() {

        let title = this.postLandingPage.headline;
        let description = '';

        if(typeof this.postLandingPage.meta !== 'undefined')
        {
            if(typeof this.postLandingPage.meta.title !== 'undefined')
                title = this.postLandingPage.meta.title;
              
            if(typeof this.postLandingPage.meta.description !== 'undefined')
                description = this.postLandingPage.meta.description;  
        }

        return {
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: "description", 
                    content: description
                }
            ]
        }
    }
}
</script>