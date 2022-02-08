<template>
<div class = "container">
    <v-data-table :headers = "headers" :items = "objects">
    <template v-slot:[`item.delete`]="{ item }">
        <v-btn color="danger" @click="deleteItem(item._id)"> Supprimer </v-btn>
    </template>
    </v-data-table>  
</div>
</template>

<script>
export default {
    data(){
        return{
            objects: [],
            headers: [
                {text: "Etat", value: "status"},
                {text: "Adress", value: "location"}, 
                {text: "Date", value: "date"},
                {text: "Categorie", value: "category"},
                {text: "Supprimer", value: "delete"}
            ] ,
            
        };
    },
    watch: {
        options: {
            handler(){
                this.readFromApi(); 
                this.deleteItem(); 
            },
        },
        deep: true,
    },
    methods: {
        async readFromApi(){
            await this.$axios.get("http://localhost:4000/objects/read_objects")
            .then((response) => {
                this.objects = response.data.data; 
            })
        },
        async deleteItem(id){
            await this.$axios.delete("http://localhost:4000/objects/delete_objects/" + id); 
            location.reload(); 
        }
    },
    mounted(){
        this.readFromApi();
    }
}
</script>
