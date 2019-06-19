<template>
    <div>
      <HeaderApp></HeaderApp>
      <h2>Upload</h2>
      <ion-item>
         <ion-label color="tertiary">upload photo</ion-label>
         <ion-input color="tertiary" type="file" @change="onImg"></ion-input>
         <ion-button @click="uploadImage"><ion-icon name="add-circle-outline"></ion-icon></ion-button>
      </ion-item>
      <ion-progress-bar v-if="subir" color="secondary" type="indeterminate"></ion-progress-bar>
      <h2>{{message}}</h2>
    </div>
</template>
<script>
   import { mapState } from 'vuex'
   const axios = require('axios');
   import HeaderApp from '../components/HeaderApp'
   export default{
       name: 'Upload',
       components: {
           HeaderApp
       },
       computed: {
           ...mapState([
             'usuario'
           ])
       },
       data() {
         return {
           img: null,
           message: null,
           subir: false,
         }
       },
       methods: {
         onImg(e){
             let type = e.target.files[0].type;
             if(type === 'image/jpeg' || type === 'image/png') {
                  this.img = e.target.files[0];
                  console.log('entro');
             }else{
               console.error('format error');
             }
         },
         uploadImage(){
           const fd = new FormData();
           fd.append('image', this.img);
           fd.append('email', this.usuario.email);
           fd.append('name', this.usuario.name);
           
           axios.post('https://api-everyone.herokuapp.com/api/picture', fd, {
               onUploadProgress: progressEvent => {
                        this.subir = true
                }
           })
                .then(res => {
                  this.message = 'The image has been successfully uploaded';
                  this.img = null
                  this.subir = false
                }).catch(err => {
                  console.error(err);
                });

         }
       }
   }
</script>
<style>
</style>