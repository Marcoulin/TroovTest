<template>
  <div>
    <h2>Table</h2>
    <v-data-table :headers="headers" :items="objects">
      <!--<template v-slot:[`item.edit`]="{ item }">
        <v-btn color="success" @click="editItem(item)"> Edit </v-btn>
      </template>
      <template v-slot:[`item.delete`]="{ item }">
        <v-btn color="danger" @click="deleteItem(item._id)"> Delete </v-btn>
      </template>-->
    </v-data-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      headers: [
        { text: "Id", value: "_id" },
        { text: "State", value: "state" },
        { text: "Location", value: "location" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
      ],
    };
  },
  computed: {
    objects() {
      return this.$store.state.objects.data;
    },
  },
  async fetch() {
    this.$store.commit(
      "objects/storeData",
      (await this.$axios.get("http://localhost:4000/objects/read_objects")).data
    );
  },
  /*
  methods: {
    async deleteItem(id) {
      await this.$axios.delete("http://localhost:4000/users/" + id);
      this.$store.commit(
        "users/storeData",
        (await this.$axios.get("http://localhost:4000/users")).data
      );
    },
    async editItem(user) {
      this.$store.commit("user/setId", user._id);
      this.$store.commit("user/setName", user.name);
      this.$store.commit("user/setEmail", user.email);
      this.$store.commit("user/setPassword", user.password);
    },
  },
  */
};
</script>