<template>
  <v-app id="app">
    <Navigation/>
     <v-content>
         <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
  export default {
    name: 'App',
    components: {
        Navigation
  },
    props: {
      source: String,
    },
    
  }
</script>
<style lang="scss">
#information{
    background-color: #fff;
}

 h1{

      border:5px solid #985B10;
      padding:10px;
      margin-bottom:5px;
      color:#985B10;
      font-weight:bold;
      text-transform:uppercase;
      font-size:16px;
      text-align: center;

    
}
main{
  display:grid;
  background-image: url(./assets/honey.jpg);
  background-size: cover;

}
</style>