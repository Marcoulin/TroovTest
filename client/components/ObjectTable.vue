<template>
<div class = "container">
    <v-data-table
        :headers = "headers"
        :items = "objects">
    </v-data-table>
</div>
</template>

<script>
export default {
    data(){
        return{
            objects: [],
            headers: [
                {text: "Status", value: "status"},
                {text: "Location", value: "location"}, 
                {text: "Date", value: "date"},
                {text: "Category", value: "category"}
            ] ,
            
        };
    },
    watch: {
        options: {
            handler(){
                this.readFromApi(); 
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
        }
    },
    mounted(){
        this.readFromApi();
    }
}
</script>
