<template>
  <canvas height="800" width="800">
    Can't Load the Game !
  </canvas>
</template>

<script>
import game from "../assets/Game";
export default {
  name: "flappyBird",
  created() {
    game();
  }
};
</script>

<style scoped></style>
