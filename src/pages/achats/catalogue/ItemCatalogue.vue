<template>
    <div class="product">
        <img v-bind:src="image" />
        <div class="product-info">
            <div class="product-name">
                <!-- ** Exercice 3 : modifier afin que la page ne soit pas rechargée au
                     complet lorsqu'on clique sur le lien ** -->
                <router-link :to="productDetailUrl">{{ name }}</router-link>
            </div>
            <div class="product-price">{{ formattedPrice }}</div>
            <div class="product-description">{{ desc }}</div>
        </div>
        <div class="product-add-to-cart">
            <button @click="cart.addToCart(id)">Ajouter au panier</button>
        </div>
    </div>
</template>

<script>
import { formatCurrency } from '../../../text_format';

export default {
    props: {
        id: String,
        name: String,
        price: Number,
        desc: String,
        image: String
    },
    // On injecte le cart afin d'avoir accès à sa méthode addToCart
    inject: ['cart'],
    computed: {
        formattedPrice() {
            return formatCurrency(this.price);
        },
        productDetailUrl() {
            return "/products/" + this.id;
        }
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
