<template>
    <section class="page-header [ container-narrow flow ] [ pt-lg pb-600 space-xs ]">
        <h1 class="[] [ measure-micro ]" v-text="(pages.headline) ? pages.headline : pages.name" />
        <p class="[] [ text-300 measure-compact leading-tight ]" v-if="pages.summary" v-text="pages.summary" />
    </section>
</template>

<script>
	export default {
		name: "PageHeader",
        props:{
            pages: Object
        }
    }
</script>