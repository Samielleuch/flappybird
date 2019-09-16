<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Flappy Bird ;D </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <Menuscreen v-if="!gameStarted" />
    <flappy-bird v-else-if="gameStarted" />
  </div>
</template>

<script>
// @ is an alias to /src
import Menuscreen from "../components/Menuscreen";
import flappyBird from "../components/flappyBird";
export default {
  name: "home",
  components: {
    Menuscreen,
    flappyBird
  },
  data: function() {
    return {
      gameStarted: true
    };
  }
};
</script>
