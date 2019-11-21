<template>
<v-container grid-list-xs>
  <v-layout align-center class="info_box">
    <v-flex sm12 xs12>
      <h1>Honey: <span>Nature's finest work</span></h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
      </div>
    </v-flex>
  </v-layout>

  <v-layout align-center row  wrap class="info_box">
    <v-flex sm2 xs12 offset-sm1>
      <h1>Honey Shop</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
      </div>
    </v-flex>
    <v-flex sm2 xs12 >
      <h1>Honey Shop</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
      </div>
    </v-flex>
    <v-flex sm2 xs12 >
      <h1>Honey Shop</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
      </div>
    </v-flex>

  </v-layout>
</v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  }
}
</script>
<style >
.info_box .flex h1{

      border:5px solid #985B10;
      padding:10px;
      margin-bottom:5px;
      color:#985B10;
      font-weight:bold;
      text-transform:uppercase;
      font-size:16px;
      text-align: center;

    
}
.info_box .flex div{
  background-color: #fff;
  padding:20px;
}
.layout:first-child{
  height: 40vh;
}
.layout:last-child{
  height: 40vh;
}
</style>