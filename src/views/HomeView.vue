<template>
  <div class="home">
    <landingComponent />
    <welcomePage />
  </div>
</template>

<script>
import landingComponent from "@/components/landingComponent.vue";
import welcomePage from "@/components/storyPages/welcomePage.vue";
export default {
  components: {
    landingComponent,
    welcomePage,
  },
};
</script>

<style lang="scss" scoped></style>
