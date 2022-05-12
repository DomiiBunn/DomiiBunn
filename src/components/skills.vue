<template>
  <div class="card">
    <div class="card-title">Skills:</div>
    <div class="card-body">
      <div class="listing">
        <div v-for="(skill, index) in skills" class="item" :key="index">
          <i class="fas fa-square-full"></i>{{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Communication",
        "Punctual",
        "Reliable",
        "Great Planner",
        "Docker",
        "VUE Mastery",
        "CSS",
        "NodeJS",
        "Git",
        "Networking",
        "Service Center QA",
        "Windows Home",
        "Windows Server",
        "Microsoft 365"
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  background-color: white;
  padding: 30px;
  box-shadow: 0 0 10px black;
  .card-title {
    font-size: 2.5rem;
    font-family: "Questrial", sans-serif;
  }
  .card-body {
    .listing {
      display: flex;
      flex-flow: row wrap;
      .item {
        flex-basis: 50%;
        display: flex;
        align-items: center;
        gap: 2px;
        i {
          font-size: 0.5rem;
          display: flex;
          align-items: center;
          color: rgb(88, 15, 88);
        }
      }
    }
  }
}
</style>
