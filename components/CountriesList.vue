<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <router-link
        v-for="country in countries"
        :key="country.alpha3Code"
        :to="`/list/${country.alpha3Code}`"
        class="list-group-item list-group-item-action"
        active-class="active"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          alt="flag"
        />
        <p>{{ country.name.common }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  countries: Array
});
</script>
