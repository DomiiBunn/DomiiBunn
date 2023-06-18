<template>
  <div
    class="button"
    @mouseenter="iconHover = true"
    @mouseleave="iconHover = false"
    @click="scrollToElement"
  >
    <i
      :class="`fa-sharp fa-solid fa-arrow-down ${iconHover ? '' : 'fa-bounce'}`"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconHover: false,
    };
  },
  props: {
    element: String,
  },
  methods: {
    scrollToElement() {
      document.getElementById(this.element).scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding-top: 20px;
  font-size: 2rem;
  color: rgba(245, 245, 245, 0.26);
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: whitesmoke;
  }
}
</style>
