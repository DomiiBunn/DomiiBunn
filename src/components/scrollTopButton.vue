<template>
  <div class="button" @click="scrollToTop">
    <i :class="`fa-sharp fa-solid fa-arrow-up`"></i>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  position: fixed;
  z-index: 99;
  bottom: 40px;
  right: 40px;
  background-color: rgba(245, 245, 245, 0.089);
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 2rem;
  color: rgba(245, 245, 245, 0.26);
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: whitesmoke;
    background-color: rgb(31, 31, 31);
    box-shadow: 0px 0px 15px 0px rgba(31, 31, 31);
  }
}
</style>
