<template>
    <h2>Panier</h2>
    <div v-if="calculatedTotalItems > 0">
        <table class="carttable">
            <thead>
                <tr>
                    <th>Article</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <RangeeItemCart v-for="cartitem in cart.items" :key="cartitem.product.id" :name="cartitem.product.name"
                    :price="cartitem.product.price" :quantity="cartitem.quantity" />
            </tbody>
            <tfoot class="carttable">
                <tr>
                    <td colspan="2">Grand total: </td>
                    <td class="nombre">{{ calculatedTotalItems }}</td>
                    <td class="nombre">{{ calculatedTotal }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div v-else>Le panier est vide !</div>
</template>

<script>
import { formatCurrency } from '../../text_format';
import RangeeItemCart from './RangeeItemCart.vue';

export default {
    components: {
        RangeeItemCart
    },
    inject: ['products', 'cart'],
    computed: {
        calculatedTotal() {
            const total = this.cart.calculateTotal();
            return formatCurrency(total);
        },
        calculatedTotalItems() {
            return this.cart.calculateTotalItems();
        }
    }
}
</script>

<style>
table.carttable {
    border-collapse: collapse;
    width: 50%;
}

table.carttable th,
table.carttable td {
    padding: 8px;
    border-bottom: 1px solid #666;
    border-top: 1px solid #666;
    border-right: 1px solid #666;
    border-left: 1px solid #666;
}

table.carttable th {
    background-color: #666;
    color: white;
}

table.carttable .nombre {
    text-align: right;
}

tfoot.carttable {
    font-weight: bold;
}
</style>
