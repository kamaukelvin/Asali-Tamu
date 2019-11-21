<template>
  <v-container>
      <v-row>
          <v-col offset-md="1" md="5">
            <h1>Add a Product</h1>
              <div class="pa-2" id="info">
                <v-text-field
              reguired
              label="Name"
              v-model="name"
            ></v-text-field>
                <v-text-field
              reguired
              label="Description"
              v-model="description"
            ></v-text-field>
                <v-text-field
              reguired
              label="Price"
              v-model="price"
            ></v-text-field>
            <v-btn  color="complete" @click="addNewMenuItem()">Add item</v-btn>
            <v-btn class= "float-right" color="incomplete">Cancel</v-btn>
              </div>
          </v-col>
          <v-col  offset-md="1" md="4">
            <h1>Review</h1>
              <div class="pa-2" id="info">
                <v-simple-table fixed-header >
                    <template v-slot:default>
                      <thead>
                          <tr>
                          <th class="text-left" style="width:70%">Name</th>
                          <th class="text-left" style="width:100px">Price</th>
                      
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span class="menu_name">{{name}}</span><br>
                            <span class="menu_description">{{description }}</span>
                            </td>
                          <td>{{price}}</td>
                    
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
// import the collection from firebase.js
import {dbMenuAdd} from '../../../firebase'
export default {
    data () {
      return {
       name:'',
       description: '',
       price:''
    }
    },
    methods:{
       //  updating the database
      //  collection.add function in  firebase takes an object as a parameter
      addNewMenuItem(){
     dbMenuAdd.add({
          name: this.name,
          description: this.description,
          price: this.price,
        })

      }
    }
  }
</script>

<style scoped>
.basket_checkout{
  font-size: 13px;
}
#info{
    background-color: #ccc;
}
tr th{
    font-weight:400;
}

.menu_name{
    font-weight:bold;
}
tr td{
    padding: 10px 10px 10px 16px;
}
.menu_description{
    font-style:italic;
    font-weight: 300;
    color: grey;
    font-size:13px;
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
</style>