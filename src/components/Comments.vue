<template>
    <div>
        <HeaderApp></HeaderApp>
        <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <ion-card>
                        <ion-img :src="`https://api-everyone.herokuapp.com/${this.id}`"></ion-img>
                    </ion-card>
                </ion-col>
                <ion-col size="12">
                    <h2>Comment</h2>
                    <ul v-for="comment in usercomment">
                        <li>{{comment.comment}}</li>
                    </ul>
                    <ion-item>
                        <ion-label position="floating">Comments</ion-label>
                        <ion-textarea :value="comment" @input="comment = $event.target.value" placeholder="Enter any comment here..."></ion-textarea>
                    </ion-item>
                    <ion-button color="primary" @click="setComment">Comment</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
        <pre>{{$data}}</pre>
    </div>
</template>
<script>
   import HeaderApp from '../components/HeaderApp'
   import { mapState } from 'vuex'
   const axios = require('axios');
   export default{
       name: 'Comments',
       data() {
          return {
              userimg: null,
              comment: null,
              usercomment: null,
          }
       },
       computed:{
           ...mapState([
               'datos',
               'usuario'
           ])
       },
       components: {
           HeaderApp
       },
       props: ['id'],
       mounted() {
        this.getComment();
       },
       methods: {
           setComment(){
               axios.post('https://api-everyone.herokuapp.com/comment',{
                   email: this.usuario.email,
                   name: this.usuario.name,
                   comment: this.comment,
                   idimage: this.id
               })
                    .then(res => {
                        console.log(res.data);
                        this.usercomment.push(res.data);
                        this.comment = null;
                    }).catch(err => {
                        console.log(err);
                    })

           },
           getComment(){
                console.log('este es el path'+this.id);
                axios.get('https://api-everyone.herokuapp.com/api/comment')
                     .then(res => {
                        this.usercomment = res.data.filter(comment => comment.idimage === this.id);
                     }).catch(err => {
                         console.error(err);
                     })
           }
       },
   }
</script>
<style>
</style>