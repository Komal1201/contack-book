import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';
import ContactList from './components/ContactList.vue';
import ContactDetails from './components/ContactDetails.vue';
import ContactForm from './components/ContactForm.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
  { path: '/contacts', component: ContactList },
  { path: '/contact/:id', component: ContactDetails, name: 'ContactDetails' },
  { path: '/add-contact', component: ContactForm, name: 'AddContact' },
  { path: '/edit-contact/:id', component: ContactForm, name: 'EditContact' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
