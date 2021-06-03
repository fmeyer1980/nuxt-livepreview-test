<template>
<div class="previewBanner  bg-light-shade-dark p-200">
    <p>Draft preview. </p>
    <button @click="refresh">Click here to refresh</button>
</div>
</template>

<script>

export default {
    name: "previewBanner",
    methods: {
        refresh() {
          this.$nuxt.refresh()
        }
    },
}
</script>


<style lang="scss" scoped>
    @import './assets/scss/config';
    $outputTokenCSS: false;
    @import './node_modules/gorko/gorko.scss';
    
    .previewBanner{
        background-color: rgba(get-color('light-shade-dark'), .95);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
        border-bottom: 1px solid rgba(#000, .05);

        button{
            text-decoration: underline;
            background-color: transparent;
            border: none;
            @include apply-utility('weight','bold');
        }
    }
</style>
