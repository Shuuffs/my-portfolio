import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import "./style.css"; // Import global CSS

const app = createApp(App);

// Register directive
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

// Use Vue Router
app.use(router);
app.mount("#app");
