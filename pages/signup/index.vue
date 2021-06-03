<template>
    <section class="signup pb-800">
        <Test headline="Ansøg om at komme med fra start" summary="- Vær blandt de første der kan sælge varer via Moooce" />
        <div class="container-narrow d-grid cols-3 gap-800">
            <Signup class="span-3 lg:span-2" />
            <div class="sticky-content d-hidden lg:d-block lg:span-1">
                <PriceItem  product-id="d4f80ab7-3d65-43f6-901e-a5e786a6211a" />
            </div>
        </div>
        <img src="/images/moooce-live-mobile-video-commerce.jpg" alt="Signup for Moooce" />
    </section>
</template>

<script>
import Test from '@/components/Test'
import Signup from "~/components/Signup";
export default {
    name: "signup",
    components: {Signup,Test},
    meta: {
        pageClasses: ['no-top-padding'],
    }
};
</script>

<style lang="scss">
@import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.signup{
    position: relative;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        opacity: .2;
        z-index: -1;
    }

}

.sticky-content{
    > * {
        position: sticky;
        top: get-size('gutter');
    }
}
</style>
