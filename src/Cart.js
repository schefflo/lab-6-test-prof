import { reactive } from 'vue';

// On importe l'objet avec la liste des produits car on s'en servira pour obtenir une référence au produit
// dans la méthode addToCart(productId) ainsi que dans la création des deux items initiaux ("plante" et "panier")
import produits from './Produits';

/**
 * Le panier de produits. Il s'agit d'un objet qui comporte une propriété items,
 * qui contient une liste de chaque produit dans le panier avec leur quantité. Cet objet comporte
 * aussi quelques méthodes qui permettent de manipuler les items du panier.
 * L'objet exposé est rendu réactif par l'appel de la fonction reactive de Vue.js (cela l'enveloppera dans
 * un Proxy réactif, comme le sont les objets dans l'option data() d'un composant.)
 */
export default reactive(
    {
        items: [
            {
                product: produits.findById('plante'), // on garde une *référence* au produit trouvé dans l'objet produits
                quantity: 1,
            },
            {
                product: produits.findById('panier'),
                quantity: 2
            }
        ],
        /**
         * Ajoute un produit (selon son productId) au panier. Si un produit avec le même productId
         * est déjà présent dans le panier, sa quantité sera incrémentée de 1. Sinon, le nouveau
         * produit est ajouté au panier avec une quantité de 1.
         * 
         * @param {String} productId L'identifiant du produit à ajouter
         */
        addToCart(productId) {
            let existingItem = null;
            this.items.forEach(item => {
                if (item.product.id === productId) {
                    existingItem = item;
                    existingItem.quantity = existingItem.quantity + 1;
                }
            });

            if (existingItem === null) {
                const cartItem = {
                    product: produits.findById(productId), // on garde une *référence* au produit trouvé dans l'objet produits
                    quantity: 1 // on initialise la quantité à 1
                };

                this.items.push(cartItem);
            }
        },
        /**
         * Retire un produit du panier selon son productId. Si aucun produit avec ce productId n'existe,
         * la méthode n'a aucun effet.
         * @param {String} productId L'identifiant du produit à retirer
         */
        removeFromCart: function (productId) {
            this.items.forEach((item, idx) => {
                if (item.product.id === productId) {
                    this.items.splice(idx, 1);
                }
            });
        },
        /**
         * Change la quantité d'un produit dans le panier.
         * @param {String} productId L'identifiant du produit dont on veut changer la quantité
         * @param {Number} newQuantity La nouvelle quantité
         */
        changeQuantity: function (productId, newQuantity) {
            const cartItem = this.items.find(item => item.product.id === productId);
            if (cartItem) {
                if (newQuantity < 1) {
                    cartItem.quantity = 1;
                } else {
                    cartItem.quantity = newQuantity;
                }
            }
        },
        /**
         * Calcule et retourne le prix total de tous les produits dans le panier
         * @returns Le prix total des produits dans le panier
         */
        calculateTotal() {
            let total = 0;
            this.items.forEach((item) => {
                total = total + item.quantity * item.product.price;
            });

            return total;
        },
        /**
         * Retourne le nombre total d'articles dans le panier
         * @returns Le nombre d'articles dans le panier
         */
        calculateTotalItems() {
            let total = 0;
            this.items.forEach((item) => {
                total = total + item.quantity;
            });

            return total;
        }
    }
);
