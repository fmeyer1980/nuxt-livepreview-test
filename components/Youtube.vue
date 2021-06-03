<template>
    <div class="aspect-ratio aspect-w-16 aspect-h-9">
        <iframe loading="lazy" width="100%" height="100%" :src="'https://www.youtube.com/embed/' + youtubeApi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
	export default {
		name: "Youtube",
        props:{
            youtubeApi: String,
            default: () => {
                return {}
            }
        }
    }
</script>
