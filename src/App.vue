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
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Questrial&family=Roboto&display=swap");
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
  height: calc(100vh - 65px);
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(13deg, #f9d4ff 14%, #c7ceff 64%);
  border-radius: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}
</style>
