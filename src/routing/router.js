import { createRouter, createWebHistory } from 'vue-router';

// General
import Home from '../views/Home.vue';
import Contacts from '../views/Contacts.vue';

const masterTitlePage = 'New Faro Sport - Sport, Passione e Divertimento a Taranto';
const masterDescription = "New Faro Sport a Taranto: il centro sportivo d'eccellenza per Padel, Calcio e divertimento. Campi moderni, eventi sportivi e passione per lo sport.";

const routes = [
  // General
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true,
    meta: {
      title: masterTitlePage,
      description: masterDescription,
    },
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    props: true,
    meta: {
      title: `Contatti - ${masterTitlePage}`,
      description: 'Contatta New Faro Sport a Taranto per prenotazioni campi da padel e calcio, informazioni su eventi e tornei.',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;
  const pageDescription = to.meta.description;

  if (pageTitle) {
    document.title = pageTitle;
  } else {
    document.title = masterTitlePage;
  }

  const descriptionElement = document.querySelector('meta[name="description"]');
  if (descriptionElement) {
    descriptionElement.setAttribute('content', pageDescription || masterDescription);
  }

  next();
});

export default router;
