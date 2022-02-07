<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        TROOV
      </h1>
      <v-btn class="justify-center"
       absolute 
       right  
       elevation="8"
       background
       color="#FFFBE6"
       to="/login">
        Connexion
      </v-btn>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="68dbc9"
      grow
    >
      <v-tab to="/">Déclarer un objet</v-tab> 
      <v-tab to="/list">Trouver un objet (liste)</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card
          color="68dbc9"
          flat
        >
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style>
/* Helper classes */
.basil {
  background-color: #68dbc9 !important;
}
.basil--text {
  color: #FFFBE6 !important;
}
</style>

<script>
  export default {
    data () {
      return {
        tab: null,
      }
    },
  }
</script>