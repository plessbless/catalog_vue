<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <v-catalog-item/>
    <v-main-wrapper/>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vMainWrapper from "@/components/v-main-wrapper";

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
    vMainWrapper,
  }
}
</script>

<style>

</style>