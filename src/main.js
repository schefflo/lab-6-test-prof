import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import PageAchats from './pages/achats/PageAchats.vue';
import ItemCatalogueDetail from './pages/ItemCatalogueDetail.vue';
import PageCheckout from './pages/checkout/PageCheckout.vue';

const app = createApp(App);

// Requis pour l'injection réactive
app.config.unwrapInjectedRef = true;

// Déclaration de Vue Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: PageAchats },
        // ** Exercice 1 : ajouter ce qu'il faut pour que la page d'un produit individuel affiche le bon produit **
        { path: '/products/:id', component: ItemCatalogueDetail, props: true },
        // ** Exercice 2 : ajouter ce qu'il faut pour que le routeur gère la page de la caisse (checkout) **
        { path: '/checkout', component: PageCheckout }
    ]
});

// Ajout de Vue Router à l'application
app.use(router);

app.mount("#app");
