<template>
    <div>
       <HeaderApp></HeaderApp>
       <ion-grid>
           <ion-row>
               <ion-col size="12">
                        <ion-card v-for="photo in userimages">
                            <ion-card-header>
                                    <ion-img :src="`https://api-everyone.herokuapp.com/${photo.path}`"></ion-img>
                                    <ion-card-subtitle>
                                        {{photo.name}}
                                    </ion-card-subtitle>
                                    <ion-card-header>
                                        {{photo.author}}
                                    </ion-card-header>
                            </ion-card-header>
                            <ion-card-content>
                                     <ion-button @click="userProfile">
                                         <ion-icon name="contact"></ion-icon>
                                     </ion-button>
                                     <ion-button>
                                         <ion-icon name="heart-empty"></ion-icon>
                                     </ion-button>
                                     <!--<ion-button @click="idComment({ id: photo._id, email: photo.author, name: photo.name })">
                                         <ion-icon name="chatboxes"></ion-icon>
                                     </ion-button>-->
                                     <ion-button @click="userComment(photo.path)">
                                         <ion-icon name="chatboxes"></ion-icon>
                                     </ion-button>
                                     <ion-button>
                                         <ion-icon name="bookmark"></ion-icon>
                                     </ion-button>
                            </ion-card-content>
                        </ion-card>
               </ion-col>
           </ion-row>
       </ion-grid>
    </div>
</template>
<script>
   import { mapActions, mapState } from 'vuex'
   import HeaderApp from '../components/HeaderApp'
   export default{
       name: 'Imagen',
       components: {
          HeaderApp
       },
       computed: {
           ...mapState([
               'userimages',
               'datos'
           ])
       },
       mounted() {
         this.imagesUsuario();
       },
       updated() {
           console.log('update');
           console.log('estos son los datos:'+this.datos);
           if(this.datos !== null){
              this.$router.push({ name: 'comment' });
           }
       },
       methods: {
          ...mapActions([
              'imagesUsuario',
              'idComment'
          ]),
          userProfile(){
              this.$router.push({ name: 'profile'})
          },
          userComment(imageId){
              console.log(imageId);
              this.$router.push({ name: 'comment', params: { id: imageId} })
          }
       },
   }
</script>
<style>
</style>