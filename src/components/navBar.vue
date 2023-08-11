<template>
  <nav :style="getStyle($route)">
    <router-link class="name" to="/">Dominika Jadowska</router-link>
    <div class="links">
      <router-link to="/cv">Experience</router-link>

      <!-- <router-link to="/projects">Projects</router-link>
        
      <router-link to="/about">About</router-link> -->
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    getStyle(route) {
      if (route.path == "/") return;
      return "background-color: rgb(65, 65, 65);";
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  border-bottom: solid 1px rgba(245, 245, 245, 0.466);
  backdrop-filter: brightness(60%);
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  .name {
    font-size: 2rem;
  }
  .links {
    display: flex;
    gap: 20px;
  }
}
</style>
