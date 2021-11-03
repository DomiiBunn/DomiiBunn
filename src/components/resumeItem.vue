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
      <div v-if="resumeObject.Action" class="holder">
        <div @click="actionClick(resumeObject.Action)" class="button">
          Find out more!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    actionClick(ActionTarget) {
      router.push(`/more/${ActionTarget}`);
    },
  },
  props: {
    resumeObject: Object,
  },
};
</script>

<style lang="scss" scoped>
.holder {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
}
.button {
  background-color: purple;
  margin-top: 10px;
  align-self: flex-end;
}

</style>
