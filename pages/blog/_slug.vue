<template>
    <div class="post">
        <client-only>
            <PreviewBanner v-if="$nuxt.isPreview" />
        </client-only>
        <PostBanner 
            :name="post.name" 
            :headline="post.headline" 
            :summary="post.summary" 
            :image="post.mainImage"
            :imageDarkness="post.darkImage"
        />
        <div class="[ container-narrow pt-600 pb-600 ]">
             <SanityBlocks className="page-content [ flow ] [ space-base-em ]"  v-if="post.body" :blocks="post.body" :serializers="serializers" />
        </div>
        <div class="post__featuredPosts [ container-narrow flow ] [ bg-light-shade-dark pt-800 pb-800 space-600 ]" >
            <PostCard class="post__featuredPosts__item" v-for="item in post.featuredPosts" :key="item._id" :item="item" />
        </div>
    </div>
</template>

<script>
    import { groq } from '@nuxtjs/sanity'
    import PostCard from "@/components/PostCard";
    import SanityBlocks from 'sanity-blocks-vue-component';
    import ContentImage from '@/components/ContentImage'
    import PreviewBanner from '@/components/PreviewBanner'

export default {
    async asyncData({ params, $sanity }) {
        const query = groq`*[_type == "post" && slug.current == "${params.slug}"] | order(_updatedAt desc){
            meta{
                title,
                description
            },
            name,
            slug,
            headline,
            summary,
            mainImage,
            body[] {
                ...,
                asset->,
                children[] {
                    ...,
                }
            },
            darkImage,
            featuredPosts[]->{
                name,
                slug,
                headline,
                summary,
                mainImage
            }
        }[0]`
        const post = await $sanity.fetch(query);
        return { post }
    },
    components: {SanityBlocks,PostCard,PreviewBanner},
     data() {
        return {
            serializers: {
                types: {
                    image: ContentImage,
                }
            }
        }
    },
    head() {
        
        let title = this.post.name;
        let description = '';

        if(typeof this.post.meta !== 'undefined')
        {
            if(typeof this.post.meta.title !== 'undefined')
                title = this.post.meta.title;
              
            if(typeof this.post.meta.description !== 'undefined')
                description = this.post.meta.description;  
        }

        return {
            // titleTemplate: "%s - this.myTitle",
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
    meta: {
		pageClasses: ['moooce-prices'],
	},
}
</script>