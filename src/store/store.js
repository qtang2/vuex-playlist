import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  //this means vue will not allow any change of state outside the mutation handlers
  strict:true,
  state:{
    products:[
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  },
  getters:{
    saleProducts: (state) =>{
      var saleProducts = state.products.map(product =>{
        return {name:"**"+product.name+"**",price:product.price/2}
      })
      return saleProducts
    }
  },
  mutations:{
    reducePrice: (state,payload) =>{
      state.products.forEach(product=>{
        product.price-=payload
      })
    }
  },
  //actions are another layer sit between component which committing the mutation and mutaion itself
  //can perform any asynchronouse actions
  actions:{
    // context is like a store
    reducePrice: (context,payload)=>{
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    }
  }
})
