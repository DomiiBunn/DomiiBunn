<template>
  <div class="landing full-screen-background">
    <div class="landing-content page-content">
      <div class="name">Dominika Jadowska</div>
      <div class="details">Development • Support • Management</div>
      <scrollButton element="development-scroll" />
    </div>
  </div>
</template>

<script>
import scrollButton from "./scrollButton.vue";
export default {
  components: {
    scrollButton,
  },
};
</script>

<style lang="scss" scoped>
.landing {
  background-image: url("@/assets/landing-bg.jpg");
  height: 100vh;
  width: 100%;
  .landing-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .name {
      font-size: 3rem;
    }
    .details {
      font-size: 1.5rem;
    }
  }
}
</style>
