<template>
<div>
    <img :src="$urlFor(asset).width(size ? size : 800).quality(70)" :alt="asset.alt" />
</div>
    
</template>

<script>
	export default {
		name: "ContentImage",
        props:{
            size: String,
            asset: Object,
            default: () => {
                return {}
            }
        }
    }
</script>
