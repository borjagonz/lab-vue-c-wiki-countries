import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "/components/CountryDetails.vue";

const routes = [
  {
    path: "/list/:alpha3Code",
    name: "country-details",
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app")?.scrollIntoView();
  },
});

export default router;