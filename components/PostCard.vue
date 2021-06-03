<template>
    <div class="card">
        <div class="image-wrapper">
            <img width="600" height="400" v-if="item.mainImage.asset" :src="$urlFor(item.mainImage).width(600).height(400)" :alt="item.mainImage.alt" />
        </div>
        <div class="content">
            <div class="[ flow ] [ space-100 ]">
                <h2 class="[ measure-micro ]" v-text="(item.headline) ? item.headline : item.name" />
                <p class="[ text-100 measure-mid ]" v-text="item.summary" />
            </div>
            <nuxt-link class="[ flow-left ] [ space-xs ]" :to="{name:'blog-slug' , params:{slug:item.slug.current} }" aria-label="Gå til forsiden">
                <span>Læs mere</span>
                <ArrowSvg class="[ fill-current ] [ w-500 ]" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import ArrowSvg from '@/components/svg/ArrowSvg'

	export default {
		name: "PostCard",
        components: {ArrowSvg},
        props:{
            item: Object
        }
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';
@import './node_modules/gorko/gorko.scss';
$outputTokenCSS: false;


    .card{
        display: grid;
        grid-template-columns: 1fr;
        gap: get-size('400');

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            z-index: 10;

            a{
                display: flex;
                align-items: center;
                align-self: flex-start;
                margin-top: get-size('200');
            }

        }

        @include media-query('md'){
            grid-template-columns: 1fr 1fr;
            gap: 0;

            .image-wrapper{
                position: relative;

                &::after{
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: get-size('900');
                    height: 100%;
                    background: linear-gradient(to left, rgba(get-color('light-shade'), .8), rgba(get-color('light-shade'), 0));
                }
            }

            .content{

                > div{
                    margin-top: auto;
                    margin-left: -4rem;
                }
                a{
                    margin-top: auto;
                    margin-left: get-size('400');
                
                    span{
                        flex-shrink: 0;
                    }
                }
            }

            &:nth-child(even){
                
                .image-wrapper{
                    order: 2;
                    &::after{
                        left: 0;
                        background: linear-gradient(to right, rgba(get-color('light-shade'), .8), rgba(get-color('light-shade'), 0));
                    }
                }

                .content{
                    order: 1;
       

                    > div{
                        margin-left: 0;
                        margin-right: -4rem;
                    }

                    a{
                        margin-left: 0;
                    }
                }
            }
        }
    }
</style>