<template>
  <div class="page">
    <div class="card">
      <div @click="goBack()" class="back">
        <i class="fas fa-chevron-left"></i> Go Back
      </div>
      <div class="card-title">
        Dolnet Group Sp. z.o.o (Limonka)
        <span class="position">Networking Specialist</span>
      </div>
      <p>
        I worked on many positions in the company mainly making sure everything
        was running smoothly. I was one of the 3 people responsible for ensuring
        netowkr stability and managing our feild technitions. I also wrote the
        company website
        <a href="https://limonka.pl" target="_blank" rel="noopener noreferrer"
          >Limonka.pl</a
        >
      </p>
      <h2>My responsibilities</h2>
      <p>
        <i class="far fa-dot-circle"></i> Spot and fix autages(1st remote if not
        possible sent out a technician)
      </p>
      <p>
        <i class="far fa-dot-circle"></i> Support our custumers in day to day
        issues. Helping set up custumer routers over the phone, preforming basic
        diagnosis.
      </p>
      <p>
        <i class="far fa-dot-circle"></i> Implementing new and more efficient
        ways of activating new clients
      </p>
      <p>
        <i class="far fa-dot-circle"></i> Implementing new network monitoring
        tools
      </p>
      <p>
        <i class="far fa-dot-circle"></i> Solving support tickets for home and
        buissnes clients
      </p>
      <p>
        <i class="far fa-dot-circle"></i> Setting up buissnes routing and
        transmissions
      </p>
      <p><i class="far fa-dot-circle"></i> Setting up IPsec VPN</p>
      <p>
        <i class="far fa-dot-circle"></i> Keeping the company website up to date
      </p>
      <h2>Understanding my position</h2>
      <p>
        I worked in multiple positions at once as the company wasn't big enough
        to split these departments(Around 10,000 clients). My work mainly
        consisted on solving individual issues with internet acces, We had an
        issue tracking system where an external call center would create issues
        to solve, Out response time was bellow 24hrs. The main goal was to solve
        each issue with the client without the need to send out a technician to
        the client. More rare but still common ware Buissnes cases where work
        consisted of solving complex networking problems from BGP routing to
        assisting in IPsec setups. The work possision was basically universal to
        what our custumers needed at the time.
      </p>
      <h2>Experience and Equipment</h2>
      <p><i class="fas fa-lightbulb"></i> Working with Ubiquity WIPS gear</p>
      <p><i class="fas fa-lightbulb"></i> Working with Ubiquity Routing gear</p>
      <p><i class="fas fa-lightbulb"></i> Working with CISCO Routing gear</p>
      <p>
        <i class="fas fa-lightbulb"></i> Working with Routerboard(MicroTick)
        Routing gear
      </p>
      <p>
        <i class="fas fa-lightbulb"></i> Assisting clients with wide set of
        customer networking gear
      </p>
      <p><i class="fas fa-lightbulb"></i> Working with Fibrain gPON gear</p>
      <p>
        <i class="fas fa-lightbulb"></i> Setting up company website in wordpress
      </p>
      <p>
        <i class="fas fa-lightbulb"></i> Setting up and implementing
        <a href="https://uisp.ui.com/" target="_blank" rel="noopener noreferrer"
          >UISP</a
        >
        for use with our WISP custumers
      </p>
      <h2>Work Photos</h2>
      <h4>The office we worked at</h4>
      <img src="/img/dol1/Office.jpg" alt="office photo" />
      <h4>An Eage Router X I've set up for a buissnes client</h4>
      <img src="/img/dol1/ERX.jpg" alt="router photo" />
      <h4>I once fixed an Ubiquity acces point that was fried by a lighting</h4>
      <img src="/img/dol1/AP.jpg" alt="ap photo" />
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