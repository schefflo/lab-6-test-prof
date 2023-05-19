<template>
    <div>
        <SommairePanier />
        <FormulaireCheckout />
    </div>
</template>

<script>
import SommairePanier from './SommairePanier.vue';
import FormulaireCheckout from './FormulaireCheckout.vue';

export default {
    components: {
        SommairePanier,
        FormulaireCheckout
    }
}
</script>

<style scoped>

</style>
