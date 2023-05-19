<template>
    <div id="product-list">
        <h2>Catalogue de produits</h2>
        <!-- products est maintenant un objet (avec des méthodes) plutôt qu'un simple tableau.
             Le tableau contenant les produits est dans sa propriété items. Voir le module Produits.js. -->
        <ItemCatalogue v-for="product in products.items" :key="product.id" :id="product.id" :name="product.name"
            :price="product.price" :desc="product.desc" :image="product.image" />
    </div>
</template>

<script>
import ItemCatalogue from './ItemCatalogue.vue';

export default {
    components: {
        ItemCatalogue: ItemCatalogue
    },
    inject: ['products']
}
</script>

<style scoped>
#product-list {
    flex-basis: 70%;
    margin-right: 20px;
    border: 1px solid black;
    padding: 10px;
}
</style>
