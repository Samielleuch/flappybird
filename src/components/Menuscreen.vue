<template>
  <div>
    <v-card>
      <v-list>
        <v-list-item v-for="(item, index) in menu" :key="index">
          <v-btn @click="choose(index)"> {{ item }} </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Menuscreen",
  data: () => {
    return {
      menu: ["Start", "Options", "Exit"]
    };
  },
  methods: {
    choose(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped></style>
