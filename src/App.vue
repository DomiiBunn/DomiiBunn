<template>
  <div id="app">
    <navigation />
    <transition name="router-fade" mode="out-in">
      <router-view />
    </transition>
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

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s ease;
}
.router-fade-enter,
.router-fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  ::-webkit-scrollbar {
    width: 5px;
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
}

@media screen and (min-width: 600px) {
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
}
.button {
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}
.button:hover {
  border-color: rgba(255, 255, 255, 1);
}

.page {
  display: flex;
  height: 100%;
  align-items: center;
  overflow: auto;
  padding-top: 35px;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 35px;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 1600px) {
    padding-right: 5px;
    padding-left: 5px;
  }
  .subTitle {
    width: 90%;
    font-size: 3rem;
  }
}
.card {
  width: 80%;
  background-color: white;
  padding: 30px;
  box-shadow: 0 0 10px black;
  .location {
    color: rgb(63, 63, 63);
  }
  .card-title {
    font-size: 2.5rem;
    font-family: "Questrial", sans-serif;
    .position {
      font-size: 1.5rem;
      color: rgb(63, 63, 63);
    }
  }
}
.back {
  cursor: pointer;
}
</style>
