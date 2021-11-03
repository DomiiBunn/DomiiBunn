<template>
  <div class="page">
    <div class="card">
      <div @click="goBack()" class="back">
        <i class="fas fa-chevron-left"></i> Go Back
      </div>
      <div class="card-title">
        Dolnet Group Sp. z.o.o (Limonka)
        <span class="position">Service desk analyst</span>
      </div>
      <p>
        I started my work at the company as a Call Center employee and quickly
        got promoted to a Service desk analysts. The position didn't exacly
        differ other then my task was not just creating issues with custumer
        complaints but also attempting to fix those issues over the phone with
        individual custumers. I was also getting office questions about
        custumers contracts, pay and vindication.
      </p>
      <h2>My responsibilities</h2>
      <p>
        <i class="far fa-dot-circle"></i> Answering client quiestions in
        technical and office enquiries
      </p>
      <p>
        <i class="far fa-dot-circle"></i> Assisting clients remotley with
        technical issues
      </p>
      <p><i class="far fa-dot-circle"></i> Ensuring custumer satisfaction</p>
      <p>
        <i class="far fa-dot-circle"></i> Assisting clients with picking
        contract terms
      </p>
      <h2>Understanding my position</h2>
      <p>
        I was working on the "1st line of contact" with the client, When anyone
        dilled the company phone numer the call would go thrugh my department,
        We would commonly fully resolve the issue a custumer was calling in
        about. This was anything from a payment issue to technical understanding
        of thier devices and help debugging them. The company grew too mutch for
        us to handle the ammount of calls therefore the callcenter part of the
        company was disolved into other departments and outsorced.
      </p>
      <h2>Experience</h2>
      <p><i class="fas fa-lightbulb"></i> Assisting clients under pressure over the phone</p>
      <p><i class="fas fa-lightbulb"></i> Understanding how to calculate client finances</p>
      <p><i class="fas fa-lightbulb"></i> Understanding how to present contract terms to clients</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: purple;
}
img {
  width: 100%;
}
</style>