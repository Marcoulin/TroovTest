<template>
    <v-app>
      <v-container absolute fill-height fluid>
        <v-row justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-card-text>
                <v-form>
                  <v-text-field v-model="username" label="Enter your username" name="username" prepend-inner-icon="mdi-mdiAccount" class="rounded-0" outlined></v-text-field>
                  <v-text-field v-model="email" label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                  <v-text-field v-model="password" label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                  <v-btn class="rounded-0" color="#68dbc9" x-large block dark @click="signup({username, email, password})">Sign up</v-btn>
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>
<script>
export default {
   data(){
      return{
         username: '',
         email: '',
         password: ''
      }
   },
   methods: {
     async signup(user){
       try{
         await this.$axios.post("http://localhost:4000/users/signing", {
           username: user.username,
           email: user.email, 
           password: user.password
         }).then(() => {
             this.$router.push("/"); 
         })
       }catch(e){
         this.error = e.response.data.message
       }
     },
   }
};
</script>

<style></style>
