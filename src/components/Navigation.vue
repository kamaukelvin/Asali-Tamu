<template>
  <div>
    <v-navigation-drawer
    color="primary"
    v-model="drawer"
    app>
    <ul>
    <!-- li tag treats the router link as lists as it would be in normal html -->
    <router-link tag="li" to="/"><v-icon color="orange">home</v-icon> Home</router-link>
    <router-link tag="li" to="/about"> <v-icon color="orange">info</v-icon> About</router-link>
    <router-link tag="li" to="/menu"><v-icon color="orange">info</v-icon> Menu</router-link>
    <router-link tag="li" to="/products"><v-icon color="orange">home</v-icon> Products</router-link>
    <router-link tag="li" to="/login"><v-icon color="orange">home</v-icon> Login</router-link>
    <router-link tag="li" to="/admin"><v-icon color="orange">lock</v-icon> Admin</router-link>
    </ul>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline"><span>ASALI </span>
      <span  class="font-weight-light">Tamu</span></v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    name: 'Navigation',
    data: () => ({
        drawer: null,
        }),
}
</script>

<style lang="scss" scoped >
.headline{
    color:#985B10;
}
nav ul{
    padding: 0;
    margin-top: 20px;
    text-decoration: none;
}
nav li{
color: #FC6D2B;
margin-left: 15%;
padding: 5px 20px;
list-style-type: none;
cursor: pointer;
}
nav li i{
  
    margin-right:10px;
}
nav li:last-child{
  position:absolute;
bottom:40px;
color:#FFB936;
}

</style>