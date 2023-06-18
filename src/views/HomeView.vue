<template>
  <div class="home">
    <landingComponent />
    <developmentPage />
  </div>
</template>

<script>
import landingComponent from "@/components/landingComponent.vue";
import developmentPage from "@/components/storyPages/developmentPage.vue";
export default {
  components: {
    landingComponent,
    developmentPage,
  },
};
</script>

<style lang="scss" scoped></style>
