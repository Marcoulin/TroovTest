<!-- Please remove this file from your project -->
<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card px-1 py-4">
        <div class="card-body">
            <h6 class="card-title mb-3">Etat</h6>
            <div class="d-flex flex-row"> <label class="radio mr-1"> <input type="radio" name="add" v-model="status" value="Perdu"> <span> <i class="fa fa-user"></i> Perdu </span> </label> <label class="radio"> <input type="radio" name="add" v-model="status" value="Trouvé"> <span> <i class="fa fa-plus-circle"></i> Trouvé </span> </label> </div>
            <h6 class="information mt-4">Adresse</h6>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <v-text-field
                        v-model="location"
                        label="Adresse"
                        required
                        ></v-text-field></div>
                </div>
            </div>
        
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                    <v-row justify="center">
                        <v-date-picker align-center v-model="date"></v-date-picker>
                    </v-row>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group">
                            <v-select
                            v-model="category"
                            :items="items"
                            label="Catégorie"
                            ></v-select>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary btn-block confirm-button" @click="addItem({status, location, date, category})">Confirm</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  
    data () { 
        return{
            category: 'Téléphone',
            items: ["Téléphone", "Portefeuile", "Vêtement", "Clefs", "Accessoires"],
            status: '', 
            location: '', 
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }        
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      async addItem(obj){
          await this.$axios.post("http://localhost:4000/objects/add_objects", {
              status: obj.status, 
              location: obj.location,
              date: obj.date, 
              category: obj.category
          })
      },
      save (date) {
        this.$refs.menu.save(date)
      },
  }
  
  
}
</script>

<style scoped src="../assets/AddObjectFromStyle.css">
</style>

