<template>
    <section  class="post-intro [] [ pt-xl pb-lg ]" v-bind:class="{ 'color-light-glare' : imageDarkness }">
        <div class="content [ container-narrow flow ] [ space-400 ]">
            <div class="[ flow ] [ space-xs ]">
                <h1 class="[] [ measure-micro ]" v-text="(headline) ? headline : name" />
                <p class="[] [ text-300 measure-compact leading-tight ]" v-if="summary" v-text="summary" />
            </div>
        </div>
        <img v-if="image.asset" :src="$urlFor(image).width(1600)" :alt="image.alt" />
    </section>
</template>

<script>

	export default {
		name: "PostBanner",
        props:{
            name: String,
            headline: String,
            summary: String,
            image: Object,
            imageDarkness: Boolean
        }
	};
</script>

<style lang="scss" scoped>

.post-intro{
    position: relative;

    &.dark{
        color: get-color('primary-shade');
    }

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
    }

    .content{
        position: relative;
        z-index: 10;
    }
}
</style>