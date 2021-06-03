<template>
	<section class="prices" id="getstarted">
        <div class="prices__image-wrapper">
            <!-- <img :src="$urlFor(home.featuredProducts.bgImage).width(1800).auto('format').quality('70')" :alt="home.featuredProducts.bgImage.alt" loading="lazy" /> -->

            <!-- <img class="[ w-full ]" 
                loading="lazy" 
                :srcset="$urlFor(home.featuredProducts.bgImage).width(900).auto('format').quality('70') + ' 1x,' + $urlFor(home.featuredProducts.bgImage).width(1800).auto('format').quality('70') + ' 2x'" 
                :alt="home.featuredProducts.bgImage.alt"> -->



            <img width="480" height="315" loading="lazy"
                :src="$urlFor(home.featuredProducts.bgImage).width(480).height(315).auto('format').quality('70')" 
                :srcset="
                $urlFor(home.featuredProducts.bgImage).width(480).height(315).auto('format').quality('30') + ' 480w, ' +
                $urlFor(home.featuredProducts.bgImage).width(768).height(504).auto('format').quality('30') + ' 768w, ' +
                $urlFor(home.featuredProducts.bgImage).width(1024).height(672).auto('format').quality('70') + ' 1024w, ' +
                $urlFor(home.featuredProducts.bgImage).width(1280).height(840).auto('format').quality('70') + ' 1280w, ' +
                $urlFor(home.featuredProducts.bgImage).width(1600).height(1050).auto('format').quality('70') + ' 1600w, '
                " 
                :alt="home.featuredProducts.bgImage.alt"
            />
        </div>
		<!-- <div class="prices__list [ container-narrow ]">
			<PriceItem v-for="product in home.featuredProducts.products" :key="product._id" :product-id="product._id" />
		</div> -->
        <div class="prices__content container-narrow">
            <div class="prices__content__item bg-primary color-light-glare rounded-mid p-400 measure-normal">
                <div class="split">
                    <div class="price-text text-xs flow space-200 leading-loose">
                        <p class="h4">Det får du</p>
                        <p>Med Moooce kan du sælge dine varer direkte gennem en webbaseret videooplevelse. Du har altså langt bedre mulighed for at fastholde og underholde dine kunder samtidig med at de får noget værdifuld information om dine produkter.</p>
                        <p>Tjekud foregår direkte gennem din allerede eksisterende e-commerce platform og er derved i dit vandte flow med fragt, betaloinger osv. Ligesom dine produkter incl. navn, billeder og pris automatisk kommer med i videoerne.</p>
                        <p>Ingen abonnement, du afregner kun en lille del af den omsætning der kommer gennem Moooce!</p>
                        <p><strong>Start allerede nu.</strong></p>
                    </div>
                    <div class="price-info">
                        <nuxt-link class="btn" data-type="secondary-glare" :to="{name:'signup'}" title="Start nu">Start nu</nuxt-link>
                        <div class="flow space-200 text-xs leading-xlloose">
                            <div>
                                <p class="[ color-primary-glare text-xxs leading-none text-transform-up ]">Video</p>
                                <hr />
                                <p>Optag og del video</p>
                                <p>Start live session video</p>
                            </div>
                            <div>
                                <p class="[ color-primary-glare text-xxs leading-none text-transform-up ]">Afspilninger og ordrer</p>
                                <hr />
                                <p>Ingen grænse for afspilninger</p>
                                <p>Ingen grænse for ordrer</p>
                            </div>
                            <div>
                                <p class="[ color-primary-glare text-xxs leading-none text-transform-up ]">Pris</p>
                                <hr />
                                <p>8% ordre fee</p>
                            </div>
                        </div>
                        <nuxt-link class="btn" data-type="secondary-glare" :to="{name:'signup'}" title="Start nu">Start nu</nuxt-link>
                    </div>
                </div>

            </div>
        </div>
	</section>
</template>
<script>
	import PriceItem from "@/components/PriceItem";
	export default {
		name: "Prices",
        components: {PriceItem},
		props:{
            home: Object
        }
	};
</script>
<style lang="scss" scoped>
    @import './assets/scss/config';

    $outputTokenCSS: false;
    @import './node_modules/gorko/gorko.scss';

    .prices{
        position: relative;
        margin-top: calc(-1 * var(--size-600));
        padding: 0 0 var(--size-400);

        @include media-query('md'){
            // margin-top: 0;
            padding: 0 0 var(--size-lg);
        }

        &__image-wrapper{

            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center top;
            }


            &::before{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 8rem;
                background: linear-gradient(to bottom, rgba(get-color('light-shade'), 1), transparent);
                z-index: 1;
            }
        }

        &__content{
            position: relative;
            z-index: 10;

            &__item{
                box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.25);
                -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.25);
                -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.25);
                
                @include media-query('lg'){
                    margin-left: get-size('600');
                }

                .price-text{

                }

                .price-info{
                    display: flex;
                    flex-direction: column;
                    text-align: center;

                    hr{
                        border: none;
                        width: 100%;
                        height: 1px;
                        background-color: get-color('primary-glare');
                        margin-bottom: 1rem;
                    }
                    
                    > div{
                        margin-top: auto;
                        margin-bottom: auto;
                        padding: get-size('400') 0;
                    }
                }
            }
        }

        // &__list{
        //     position: relative;
        //     display: grid;
        //     grid-template-columns: 1fr;
        //     gap: get-size('gutter');
        //     z-index: 10;

        //     @include media-query('md'){
        //         grid-template-columns: repeat(3, 1fr);
        //         align-items: center;
        //     }
        // }
    }
</style>