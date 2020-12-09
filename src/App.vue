<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'


export default {
  components:{
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo
  },
  name:'app',
  data(){
    return{
      
    }
  }

}
</script>

<style scoped>
body{
  font-family: Ubuntu;
  color:#555;
}
</style>
