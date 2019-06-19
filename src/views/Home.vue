<template>
    <div>
        <Header></Header>
        <ion-card>
            <ion-card-header>
                <ion-card-subtitle>
                    Card Subtitle
                </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
                     <ion-item>
                       <ion-label position="floating">
                          Email
                       </ion-label>
                       <ion-input :value="email" @input="email = $event.target.value" required></ion-input>
                     </ion-item>
                     <ion-item>
                        <ion-label position="floating">
                          Password
                        </ion-label>
                        <ion-input type="password" :value="password" @input="password = $event.target.value" required></ion-input>
                     </ion-item>
                     <ion-button color="secondary" @click="userLogin({ email: email, password: password })">Log In<ion-icon name="send"></ion-icon></ion-button>
            </ion-card-content>
        </ion-card>
        <h1>{{myToken}}</h1>
        <h4>{{comprobar}}</h4>
        <pre>{{$data}}</pre>
    </div>
</template>
<script>
   import { mapActions, mapState, mapGetters } from 'vuex'
   import Header from '../components/Header'
   export default{
     name: 'Home',
     computed: {
        ...mapState([
          'usuario',
          'comprobar'
        ]),
        ...mapGetters([
          'myToken'
        ])
     },
     components: {
        Header
     },
     data() {
       return {
           email: null,
           password: null
       }
     },
     updated() {
       console.log('update');
       this.validarToken();
     },
     methods: {
        ...mapActions([
          'userLogin'
        ]),
        validarToken(){
           const token = localStorage.getItem('token');
           console.log(token);

           if(this.comprobar ===  true && token !== null){
               this.$router.push({
                  name: 'imagen'
               })
           }
        }
     },
   }
</script>
<style>
</style>