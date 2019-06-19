<template>
     <div>
        <div id="nav">
           <router-link to="/imagen">images</router-link> |
           <router-link to="/upload">upload</router-link>
        </div>
     </div>
</template>
<script>
   export default{
       name: 'Header'
   }
</script>
<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0bb8cc;
}
</style>