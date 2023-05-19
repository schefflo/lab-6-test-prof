<template>
    <div v-if="product" class="product">
        <img v-bind:src="'/' + product.image" />
        <div class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">{{ formattedPrice }}</div>
            <div class="product-description">{{ product.desc }}</div>
            <div>{{ product.longDesc }}</div>
        </div>
    </div>
    <div v-else>
        Produit introuvable!
    </div>
</template>

<script>
import { formatCurrency } from '../text_format';

export default {
    // ** Exercice 1: ajouter ce qu'il faut pour que la page d'un produit individuel affiche le bon produit **
    inject: ['products'],
    props: {
        id: String
    },
    data() {
        return {
            product: null
        };
    },
    methods: {
        refreshProduct(id) {
            this.product = this.products.findById(id);
        }
    },
    computed: {
        formattedPrice() {
            return formatCurrency(this.product.price);
        }
    },
    watch: {
        id(newId) {
            this.refreshProduct(newId);
        }
    },
    created() {
        this.refreshProduct(this.id);
    }
}
</script>

<style scoped>
.product {
    margin-bottom: 20px;
    border: 1px solid black;
    padding: 10px;
    overflow: hidden;
    clear: both;
}

.product img {
    float: left;
    margin-right: 10px;
    width: 100px;
    object-fit: cover;
}

.product-info {
    float: left;
    width: 60%;
}

.product-name {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
}

.product-price {
    font-weight: bold;
    font-size: 1.2em;
    color: green;
}

.product-description {
    margin-top: 5px;
    font-size: 0.9em;
    color: #666;
}

.product-add-to-cart {
    float: right;
    width: 40%;
    text-align: right;
    font-size: 1.2em;
    line-height: 2em;
}
</style>
