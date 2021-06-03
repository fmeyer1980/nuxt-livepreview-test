<template>
    <div class="page-header [ container-narrow flow ] [ pt-xl pb-600 space-xs ]">
        <h1 class="[] [ measure-micro ]" v-text="headline" />
        <p class="[] [ text-300 measure-compact leading-tight ]" v-if="summary" v-text="summary" />
    </div>
</template>

<script>
    export default {
		name: "PageHeader",
        props:{
            headline: String,
            summary: String
        }
    }
</script>
