import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     usuario: null,
     comprobar: false,
     userimages: null,
     datos: null,
  },
  mutations: {
      cargarUsuario(state, contenido){
          state.usuario = contenido
          state.comprobar = true
      },
      cargarImages(state, imagenes){
         state.userimages = imagenes
      },
      cargarDatos(state, valores){
          state.datos = valores
          console.log(valores);
      }
  },
  actions: {
     userLogin({commit}, datos){
       console.log(datos);
       if(datos.email !== null && datos.password !== null){
          axios.post('https://api-everyone.herokuapp.com/login', {
            email: datos.email,
            password: datos.password
          }).then(res => {
              console.info(res.data);
              commit('cargarUsuario', res.data)
          }).catch(err => {
              console.error(err);
          })
       }

     },
     imagesUsuario({commit}){
       axios.get('https://api-everyone.herokuapp.com/')
         .then(res => {
            console.log(res.data);
            commit('cargarImages', res.data) })
         .catch(err => console.error(err));
     },
     idComment({commit}, id){
        commit('cargarDatos', id);
     }
  },
  getters: {
    myToken(state){
      console.log('entro en funcion my token');
      console.log(state.usuario);
      if(state.usuario !== null){
         console.log('se creo el token!');
         return localStorage.setItem('token', state.usuario.token); 
      }
    }
  }
})
