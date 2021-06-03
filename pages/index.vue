<template>
  <div>
	<client-only>
        <PreviewBanner v-if="$nuxt.isPreview" />
    </client-only>
	<div class="header-animation-trigger"></div>
    <Hero :home="home" />
    <Intro :home="home" />
	<System :home="home" />
	<Prices :home="home" />
	<NewsletterSignUp :home="home" />
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import System from "@/components/System";
import Prices from "@/components/Prices";
import NewsletterSignUp from "@/components/NewsletterSignUp";
import PreviewBanner  from '@/components/PreviewBanner'

export default {
		components: {Hero,Intro,System,Prices,NewsletterSignUp,PreviewBanner},
		meta: {
			pageClasses: ['home'],
		},
		async asyncData({ $sanity,store }) {
		const query = groq`*[_type == "home"]{
		meta{
			title,
			description
		},
		intro{
			bgImage,
			tagline,
			headline,
			subHeadline,
			text,
			"video": video.asset->url,
			productImage{
				"imageWidth": asset->.metadata.dimensions.width,
    			"imageHeight": asset->.metadata.dimensions.height,
				...,
			}
		},
		systems{
			headline,
			linkText,
			logos[]{
				image{
					"imageWidth": asset->.metadata.dimensions.width,
    				"imageHeight": asset->.metadata.dimensions.height,
					...,
				},
				_key,
				comingSoon,
				size
			}
		},
		featuredProducts{
			bgImage,
			products[]->{
				_id
			}
		},
		newsletter{
			headline,
			subHeadline,
			text
		}
		}[0]`
		const home = await $sanity.fetch(query)

		return { home }
		},
		head() {
        	return {
				// titleTemplate: "%s - this.myTitle",
				title: typeof this.home.meta.title !== 'undefined' ? this.home.meta.title : '',
				meta: [
					{
						hid: 'description',
						name: "description", 
						content: typeof this.home.meta.description !== 'undefined' ? this.home.meta.description : ''
					}
				]
			}
		}
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

// Test

</style>
