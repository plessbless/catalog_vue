<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item_image" :src="require('../assets/images/' + product_data.image)" alt="img">
    <p class="v_catalog-item_name">{{product_data.name}}</p>
    <p class="v_catalog-item_price">Price: {{product_data.price}} P.</p>
    <button
        class="v_catalog-item_add_to_cart_btn"
        @click="sendDataToParent"
    >Add to cart</button>
  </div>
</template>

<script>
  export default {
    name: "v-catalog-item",
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      sendDataToParent() {
        //Вызываем эмитер, указываем что хотим передать вторым аргументом, а первым то как это дело будет называться, но уже в родителе
        this.$emit('sendArticle', this.product_data.article)
      }
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    //Каждый чайлд элемент будет занимать
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &_image {
      width: 140px;
      height: 200px;
    }
  }

</style>