<template>
  <div class="col-7" v-if="country">
    <img
      :src="`https://restcountries.com/data/${country.alpha3Code.toLowerCase()}.svg`"
      alt="country flag"
      style="width: 300px"
    />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital?.[0] || 'N/A' }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {{ country.area }} km<sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul v-if="country.borders?.length">
              <li
                v-for="border in country.borders"
                :key="border"
              >
                <router-link :to="`/list/${border}`">
                  {{ getCountryName(border) }}
                </router-link>
              </li>
            </ul>
            <span v-else>No borders</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  countries: Array
});

const route = useRoute();

const country = computed(() =>
  props.countries.find(c => c.alpha3Code === route.params.alpha3Code)
);

const getCountryName = (code) => {
  const match = props.countries.find(c => c.alpha3Code === code);
  return match ? match.name.common : code;
};
</script>
