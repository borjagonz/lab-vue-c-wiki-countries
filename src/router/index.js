import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "./components/CountriesList.vue";
import CountryDetails from "./components/CountryDetails.vue";

const routes = [
  {
    path: "/",
    component: CountriesList,
  },
  {
    path: "/list/:alpha3Code",
    component: CountryDetails,
    props: true
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
