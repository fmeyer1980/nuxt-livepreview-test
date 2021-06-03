<template>
    <section v-if="item" class="[ container-narrow flow ] [ bg-primary color-light-glare pt-600 pb-600 space-200 ]">
        <div class="[ flow ]">
            <p class="h3" v-text="item.headline" />
            <p class="[ text-100 measure-short ]" v-text="item.text" />
        </div>
        <form class="[ split ] [ text-xs ]" action="">
            <div class="[ flow ]">
                <div class="[ flow ]">
                    <label>
                        <span>CVRnr</span>
                        <input type="text" name="CVR">
                    </label>
                    <label>
                        <span>Dit navn</span>
                        <input type="text" name="NAVN">
                    </label>
                    <label>
                        <span>E-mail (Til kontakt)</span>
                        <input type="email" name="EMAIL">
                    </label>
                    <label>
                        <span>Din E-COMMERCE URL</span>
                        <input type="text" name="E-COMMERCE-URL">
                    </label>
                </div>
            </div>
            <div class="[ flow ]">
                <label>
                    <span>Beskriv dit problem/spørgsmål</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>
                <button class="btn" data-type="secondary">Tak, I må gerne kontakte mig</button>
                <sub>Når du udfylder formularen, benytter vi de oplyste informationer til at kontakte dig. Oplysningerne og vores korrespondance bliver gent i 12 mdr.</sub>
            </div>
        </form>
  
    </section>
</template>

<script>
	export default {
		name: "ContactForm",
        props:{
            item: Object
        }
    }
</script>

<style lang="scss" scoped>

form{
    > div {
        display: flex;
        flex-direction: column;
    }

    button{
        align-self: flex-start;
    }

    label{
    display: block;
    width: 100%;

    span{
        margin-bottom: .3em;
        display: block;
    }
}
}

</style>