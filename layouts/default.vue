<template>
  <div id="body" :class="bodyClasses">
    <client-only>
      <siteHeader v-if="!$nuxt.isPreview" />
    </client-only>
    <Menu />
    <main class="">
      <Nuxt :class="pageClasses" />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import {mapState} from "vuex";
import SiteHeader from "@/components/SiteHeader";
import Menu from "@/components/Menu";
import SiteFooter from "@/components/SiteFooter";

export default {
  components: {SiteHeader,SiteFooter,Menu},
   computed:{
			...mapState('view', {
				pageClasses: 'pageClasses',
				menuOpen: 'menuOpen'
			}),
      bodyClasses(){
				let bodyClasses = [];

				if(this.menuOpen)
					bodyClasses.push('open');

				return bodyClasses;
			}
		}
}
</script>