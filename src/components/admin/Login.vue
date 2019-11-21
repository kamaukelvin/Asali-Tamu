<template>
  <v-container>
      <v-row>
          <v-col offset-md="3" md="6" xs="12">
            <h1>Admin Login</h1>
            <div id="information">
             
                 <v-text-field
            label="Email"
          
            required
            v-model="email"
          ></v-text-field>
             
            <v-text-field
            label="Password"
          
            required
            v-model="password"
          ></v-text-field>
          <!-- click.prevent ensures that the page does not reload -->
          <v-btn
          color="complete"
           @click.prevent="signIn()">SignIn</v-btn>
          <v-btn
          color="incomplete"
           @click.prevent="signOut()">SignOut</v-btn>
            </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
 import firebase from 'firebase';
 import 'firebase/firestore'
 
export default {
data(){
    return{
        email:'',
        password:''
    }
},
methods:{
    signIn(){
        // checks if email and password match firebase authentication database
  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
// if credentials match redirect to admin page
this.$router.replace('/admin')
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
// display errors
if (errorCode === 'auth/wrong-password'){
    alert('wrong username/password')}
    else{
        alert(errorMessage)
    }
  })
  },
  signOut(){
      firebase.auth().signOut().then(()=> {
  // Sign-out successful.
  alert("signed out")
 
// redirect to homepage
this.$router.replace('/')
}).catch((error)=> {
  // An error happened.
  alert(error)
});
  }
}
}
</script>

<style>
#information{
    padding:20px;
}
</style>