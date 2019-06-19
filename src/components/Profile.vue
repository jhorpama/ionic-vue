<template>
    <div>
        <HeaderApp></HeaderApp>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <h2>profile</h2>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>
<script>
   import HeaderApp from '../components/HeaderApp'
   export default{
       name: 'Profile',
       components: {
           HeaderApp
       },
   }
</script>
<style>
</style>