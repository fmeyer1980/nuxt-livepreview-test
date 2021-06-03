<template>
    <section class="hero full-bleed">
        <div class="hero__content [ container ] [ color-light-glare ]">
            <div class="measure-micro text-400 xl:text-500 text-transform-up">
                <span class="font-secondary weight-mid leading-tight" v-for="item in home.intro.tagline" :key="item.item">{{ item }}</span>
            </div>
            
        </div>
            <img class="hero__image" width="480" height="315"
                :srcset="
                $urlFor(home.intro.bgImage).width(480).height(600).auto('format').quality('70') + ' 480w, ' +
                $urlFor(home.intro.bgImage).width(768).height(768).auto('format').quality('70') + ' 768w, ' +
                $urlFor(home.intro.bgImage).width(1024).height(672).auto('format').quality('70') + ' 1024w, ' +
                $urlFor(home.intro.bgImage).width(1280).height(840).auto('format').quality('70') + ' 1280w, ' +
                $urlFor(home.intro.bgImage).width(1600).height(1050).auto('format').quality('70') + ' 1600w, '
                " 
                :alt="home.intro.bgImage.alt"
            />
    </section>
</template>

<script>
	export default {
		name: "Hero",
        props:{
            home: Object
        }
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.hero{
    position: relative;
    &__content{
        position: relative;
        z-index: 10;
        padding-top: calc(var(--size-xl) * 1.3);
        padding-bottom: calc(var(--size-xl) * 2.3);

        div{
            display: flex;
            flex-direction: column;

            span{
                &:last-child{
                    font-size: 3em;
                    color: get-color('secondary');
                    align-self: flex-end;
                      @include apply-utility('leading', 'none');
                }
            }
        }


    }

    &__image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>