<!-- Please remove this file from your project -->
<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card px-1 py-4">
        <div class="card-body">
            <h6 class="card-title mb-3">Etat</h6>
            <div class="d-flex flex-row"> <label class="radio mr-1"> <input type="radio" name="add" v-model="state" value="Perdu"> <span> <i class="fa fa-user"></i> Perdu </span> </label> <label class="radio"> <input type="radio" name="add" v-model="state" value="Trouvé"> <span> <i class="fa fa-plus-circle"></i> Trouvé </span> </label> </div>
            <h6 class="information mt-4">Adresse</h6>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <input v-model="location" class="form-control" type="text" placeholder="Adresse"></div>
                </div>
            </div>
        
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input v-model="date" class="form-control" type="text" placeholder="Date"></div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input v-model="category" class="form-control" type="text" placeholder="Type d'objet"></div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary btn-block confirm-button" @click="addItem({state, location, date, category})">Confirm</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  computed: {
      state: {
          get(){
              return this.$store.state.object.state;
          },
          set(value){
              this.$store.commit("object/setStatus", value)
          }
      },

      location: {
          get(){
              return this.$store.state.object.location; 
          },
          set(value){
              this.$store.commit("object/setLocation", value)
          }
      },

      date: {
          get(){
              return this.$store.state.object.date; 
          },
          set(value){
              this.$store.commit("object/setDate", value)
          }
      },

      category: {
          get(){
              return this.$store.state.object.category; 
          },
          set(value){
              this.$store.commit("object/setCategory", value)
          }
      }
  },
  
  methods: {
      async addItem(obj){
          await this.$axios.post("http://localhost:4000/objects/add_objects", {
              state: obj.status, 
              location: obj.location,
              date: obj.date, 
              category: obj.category
          })
      }
  }
  
  
}
</script>

<style scoped src="../assets/AddObjectFromStyle.css">
</style>

