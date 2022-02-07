<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Login"
                              type="text"
                              v-model= "email"
                           >{{email}}</v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model = "password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login({email, password})">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
   data(){
      return{
         user: {
            
            email: "",
            password: ""
         }
      }
   },
   methods: {
     async login(user){
       try{
         await this.$axios.post("http://localhost:4000/users/login", {
           email: user.email, 
           password: user.password
         }).then((response) => {
            if(response.data.secret){
               this.$router.push('/'); 
            }
         })
       }catch(e){
         this.error = e.response.data.message
       }
     },
   }
};
</script>

<style></style>
