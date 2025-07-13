import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import Contact from "./views/contact.vue";
import Project from "./views/project.vue";
import Experince from "./views/experince.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/project", component: Project },
  { path: "/experince", component: Experince },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
