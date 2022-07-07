<template>
  <nav>
    <div @click="navClick" class="title">
      <div class="name">Dominika Jadowska</div>
      <div class="slash">/</div>
      <div class="position">Networking Specialist</div>
    </div>
    <div class="links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/resume" class="link">Resume</router-link>
      <router-link to="/projects" class="link">Projects</router-link>
      <a
        href="https://status.domiibunn.live/"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        >Status Page <i class="fas fa-external-link"></i
      ></a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    navClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 65px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
  .title {
    cursor: pointer;
    display: flex;
    gap: 5px;
    height: 100%;
    align-items: center;
    .name {
      font-family: "Great Vibes", cursive;
      font-size: 2rem;
      @media screen and (max-width: 600px) {
        font-size: 1rem !important;
      }
      color: rgb(88, 15, 88);
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    }
    .slash {
      color: blue;
    }
    .position {
      font-size: 0.8rem;
    }
  }
  .links {
    display: flex;
    gap: 10px;
    .link {
      text-shadow: none;
      transition: text-shadow 150ms linear;
    }
    .link:hover {
      text-shadow: 1px 1px 1px rgba(88, 15, 88, 0.4);
    }
    .link.router-link-exact-active {
      color: rgb(88, 15, 88);
      font-weight: bold;
    }
  }
}
</style>
