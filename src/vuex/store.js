import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store ({
    //Состояния: здесь хранятся переменный, объекты, коллекции и тд
    state: {
        products: []
    },
    //Мутации: штука с помощью которой можно менять данный состояния.
    // Мутации синхроны, если вызвать одновременно 2 мутации выполнится одна мутация, затем другая.
    // Если необходимо делать асинхронно используем actions действия
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios(' http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        }
    },
    //getters: короткий путь до получения информации о данных в state
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
});

export default store;
