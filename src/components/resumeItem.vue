<template>
  <div class="card">
    <div class="card-title">
      {{ resumeObject.Place }}
      <span class="position">{{ resumeObject.Position }}</span>
    </div>
    <div class="location">
      {{ resumeObject.Address }}
    </div>
    <div class="card-body">
      <div class="timeframe">
        {{ resumeObject.From }} - {{ resumeObject.To }}
      </div>
      <div class="description">
        {{ resumeObject.Description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resumeObject: Object,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
