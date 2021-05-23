<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import navigation from "@/components/navBar.vue";
export default {
  components: {
    navigation,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto&display=swap");
html {
  height: 100%;
  background-color: white;
}

body {
  margin: 0;
  height: 100%;
  background-image: url("http://i.imgur.com/9HMnxKs.png");
  background-repeat: repeat-y;
  background-size: 40% auto;
  font-family: "Roboto", sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
