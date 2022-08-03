import { createTransformContext } from "@vue/compiler-core";
import { createApp } from "vue";
import { createStore } from "vuex";
import  axios  from "axios";
import App from "./App.vue";

import "./assets/main.css";

// Store
const store = createStore({
  state() {
    return {
      getjson: null,
    };
  },
  mutations: {
    getfile(state) {
      axios
        .get("./data/dummy_data.json")
        .then((response: any)=> {
          if (state.getjson == null) {
            state.getjson = response.data;
          }
        })
    }
  }
})

const app = createApp(App);
app.use(store);
app.mount("#app");


