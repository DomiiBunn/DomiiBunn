<template>
  <div id="app">
    <scrollTopButton v-if="scrolled" />
    <navBar />
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import scrollTopButton from "./components/scrollTopButton.vue";
export default {
  components: {
    navBar,
    scrollTopButton,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = true;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
</style>

<style type="text/css">
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
