<template>
    <EnteteNavigation />
    <router-view></router-view>
</template>

<script>
import { computed } from 'vue';

import EnteteNavigation from './components/EnteteNavigation.vue';

import produitsImport from './Produits';
import cartImport from './Cart';

export default {
    components: {
        EnteteNavigation
    },
    data: function () {
        return {
            // Le catalogue de produit (depuis l'import d'un autre module):
            products: produitsImport,
            // Le panier d'items choisis (depuis l'import d'un autre module):
            cart: cartImport
        };
    },
    methods: {
    },
    provide() {
        return {
            products: computed(() => this.products),
            cart: computed(() => this.cart)
        };
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}
</style>
