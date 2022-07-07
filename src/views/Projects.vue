<template>
  <div class="page">
    <div class="page-nav card">
      <router-link to="/projects/lam" class="nav-item"
        >Live Action Map</router-link
      >
      <router-link to="/projects/imaginecraft" class="nav-item"
        >ImagineCraft</router-link
      >
      <router-link to="/projects/ls4" class="nav-item"
        >LS4</router-link
      >
      <router-link to="/projects/watchy" class="nav-item"
        >Watchy</router-link
      >
      <!-- <router-link to="/projects/smarthome" class="nav-item"
        >Smart Home</router-link
      > -->
    </div>
    <div class="card"><router-view /></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-nav {
  display: flex;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  .nav-item {
    text-shadow: none;
    transition: text-shadow 150ms linear;
  }
  .nav-item:hover {
    text-shadow: 1px 1px 1px rgba(88, 15, 88, 0.4);
  }
  .nav-item.router-link-exact-active {
    color: rgb(88, 15, 88);
    font-weight: bold;
  }
}
</style>
