
import { createRouter, createWebHistory } from 'vue-router';

// General
import Home from '../views/Home.vue';
import Contacts from '../views/Contacts.vue';

const masterTitlePage = "New Faro Sport";

const routes = [
    // General
    {
        path: '/',
        name: 'home',
        component: Home,
        props: true,
        meta: { title: `${masterTitlePage}` }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
        props: true,
        meta: { title: `${masterTitlePage}` }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;
    if (pageTitle) {
        document.title = pageTitle;
    } else {
        document.title = masterTitlePage;
    }
    next();
});

export default router;