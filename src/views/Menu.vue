<template>
<v-container>
    <v-row>
        <v-col offset-md="1" md="5">
          <h1>Shop here</h1>
            <div class="pa-2" id="info">
                 <template>
            <v-simple-table fixed-header height="400px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name of Product</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Add To Basket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in menuItems" :key="item.name">
                    <td>
                      <span class="menu_name">{{ item.name }}</span><br>
                      <span class="menu_description">{{ item.description }}</span>
                      </td>
                    <td>{{ item.price}}</td>
                    <td>
                      <v-btn text>
                         <v-icon color="orange" @click="addToBasket(item)">add_box</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
  </v-simple-table>
    </template>
            </div>
        </v-col>
        <v-col  offset-md="1" md="4">
          <h1>Items in your cart</h1>
             <div class="pa-2" id="info">
                  <v-simple-table class="menu-table" v-if="basket.length>0">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left" style="width:30%">Quantity</th>
                        <th class="text-left" style="width:50%">Name of Product</th>
                        <th class="text-left" style="width:20%">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in basket" :key="item.name">
                           <td >
                             <v-icon color="orange" @click="increaseQtn(item)">add_box</v-icon>
                           {{item.quantity}}
                             <v-icon color="orange" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
                           </td>
                        <td>
                            <span class="menu_name">{{ item.name }}</span></td>
                        <td >
                          {{item.price}}
                        </td>
                        </tr>
                    </tbody>
                    </template>
                 </v-simple-table>
                 <v-simple-table  v-else>
                   <p class="text-center">The basket is empty. Add items</p>
                 </v-simple-table>
                 
                 <v-divider></v-divider>
                 <v-row class="mt-4 basket_checkout" style="margin:0">
                   <v-col>
                 <p>SubTotal </p>
                 <p>Delivery</p>
                 <p>Total Amount </p>
                   </v-col>
                   <v-col class="text-right">
                       <p>{{subTotal}}</p>
                        <p>10</p>
                        <p><b>{{total}}</b> </p>
                   </v-col>
                 </v-row>
                 <v-row style="margin:0">
                   <v-spacer></v-spacer>
                     <v-btn color="orange">Checkout</v-btn>
                 </v-row>
             </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {dbMenuAdd} from '../../firebase'
 export default {
 
    data () {
      return {
        // basket:[],
        search: '',
        headers: [
          {
            text: 'Name of Product',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Price', value: 'price'},
          { text: 'Add to basket', value: 'btn', sortable:false  },
          
        
        ],
        menuItems: [
         
        //  <==============test data=====================>
         // {
          //   name: 'Frozen Yogurt',
          //   price: 159,
          //   description: 'Natural sweet honey, no preservatives added'
    
          // },
          // {
          //   name: 'Ice cream sandwich',
          //   price: 237,
          //   description: 'Natural sweet honey, no preservatives added'
      
          // },
          // {
          //   name: 'Eclair',
          //   price: 262,
          //   description: 'Natural sweet honey, no preservatives added'
        
          // },
          // {
          //   name: 'Cupcake',
          //   price: 305,
          //   description: 'Natural sweet honey, no preservatives added'
           
          // },
          // {
          //   name: 'Gingerbread',
          //   price: 356,
          //   description: 'Natural sweet honey, no preservatives added'
          
          // },
          // {
          //   name: 'Jelly bean',
          //   price: 375,
          //   description: 'Natural sweet honey, no preservatives added'
          
          // },
          // {
          //   name: 'Lollipop',
          //   price: 392,
          //   description: 'Natural sweet honey, no preservatives added'
     
          // },
          // {
          //   name: 'Honeycomb',
          //   price: 408,
          //    description: 'Natural sweet honey, no preservatives added'
           
          // },
          // {
          //   name: 'Donut',
          //   price: 452,
          //   description: 'Natural sweet honey, no preservatives added'
          
          // },
          // {
          //   name: 'KitKat',
          //   price: 518,
          //   description: 'Natural sweet honey, no preservatives added'
          
          // },
        ],
      }
    },
    methods:{
      addToBasket(item){

        //do a check to avoid duplicate add of products, instead increase the quantity
        // if(this.basket.find(itemInArray => item.name === itemInArray.name)){
        //   item = this.basket.find(itemInArray => item.name === itemInArray.name);
        //   this.increaseQtn(item)
        // }
        //  else{
        // this.basket.push({
        //   name:item.name,
        //   price:item.price,
        //   quantity:1

        // })}
      
       this.basket.push({
          name:item.name,
          price:item.price,
          quantity:1

        })
        this.$store.commit('addBasketItems', this.basket)
      }, 
      increaseQtn(item){
        item.quantity++
      },
      decreaseQtn(item){
        item.quantity--;
        if (item.quantity===0){
          this.basket.splice(this.basket.indexOf(item),1)
        }
      }
    },
    computed:{

      // linking the component to the vuex store
      // function basket goes to the store>into the getters> to the getter called basketItems and returns the objects on the screen
      basket(){
       return this.$store.getters.getBasketItems
      },
      subTotal(){
        var subCost = 0;
        for(var items in this.basket){
          var individualItem=this.basket[items];
          subCost += individualItem.quantity * individualItem.price
        }
        return subCost
      },
      total(){
        var deliveryPrice = 10;
        var totalCost = this.subTotal
        return totalCost + deliveryPrice
      }
    },
    created (){
      // grabbing our data from the firebase database and storing it in the menuItems array
   
  //   get the data from the database and stores it in a variable called menuItemData
    dbMenuAdd.get()
      .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
             //  console.log(doc.id, " => ", doc.data())
             var menuItemData = doc.data();
//  add our data stored in the menuItem Data variable to our menuItems array
             this.menuItems.push({
               id: doc.id,
               name: menuItemData.name,
               description: menuItemData.description,
               price: menuItemData.price,
             })
        })
      })
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