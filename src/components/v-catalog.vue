<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog_list">
      <!--    На каждой иттерации создает новый каталог айтем и в него закидывает каждый новый из объектов-->
      <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          v-bind:product_data="product"
          @sendArticle="showChildArticleInConsole"
      />
    </div>
    <v-main-wrapper/>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vMainWrapper from "@/components/v-main-wrapper";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
    vMainWrapper,
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticleInConsole(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('Data arrived')
      }
    })
  }
}
</script>

<style lang="scss">
  .v-catalog {
    &_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>