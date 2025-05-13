<template>
  <div class="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <CountriesList :countries="countries" />
        <router-view :countries="countries" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import CountriesList from "/components.components/CountriesList.vue";
import countriesData from ".countries.json";
import { ref } from "vue";

const countries = ref(countriesData);
</script>