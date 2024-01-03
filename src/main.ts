import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Styles 
import './style.css'
import './styles/tailwind.css'
import 'primevue/resources/themes/lara-light-green/theme.css'

// Pages
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Gallery from './pages/Gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/gallery', component: Gallery }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');
