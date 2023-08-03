<template>
  <div class="section-listing-sm">
    <div v-for="skill in skills" :key="skill" class="listing-item-sm">
      <i class="fa-regular fa-circle-dot"></i>
      <div class="listing-text">{{ skill }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: Array,
  },
};
</script>

<style lang="scss" scoped></style>
