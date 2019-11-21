<template>
<v-container>
    <v-row>
        <v-col offset-md="1" md="5">
          <h1>Current items in basket</h1>
            <div class="pa-2" id="info">
                 <template>
            <v-simple-table fixed-header height="400px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                        <v-btn color="orange" small text to="/addNew"><v-icon>add</v-icon>
                      <span style="padding:0 10px;">Add Item</span></v-btn><br>
                      Name of Product
                      </th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Edit</th>
                    <th class="text-left">Remove</th>
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
                      <v-btn small text>
                         <v-icon color="orange">edit</v-icon>
                      </v-btn>
                    </td>
                    <td>
                      <v-btn small text @click="deleteItem(item.id)">
                         <v-icon color="orange">delete</v-icon>
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
              Right
                
             </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { dbMenuAdd } from '../../firebase';
 export default {
    data () {
      return {
        basket:[],
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
    }, 
    methods:{
      addToBasket(item){
        //do a check to avoid duplicate add of products, instead increase the quantity
        if(this.basket.find(itemInArray => item.name === itemInArray.name)){
          item = this.basket.find(itemInArray => item.name === itemInArray.name);
          this.increaseQtn(item)
        }
         else{
        this.basket.push({
          name:item.name,
          price:item.price,
          quantity:1

        })}
      },
      deleteItem(id){
      dbMenuAdd.doc(id).delete().then(function() {
  //  alert("Document successfully deleted!");
}).catch(function(error) {
    alert("Error removing document: ", error);
});
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