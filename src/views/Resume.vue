<template>
  <div class="resume">
    <skills />
    <div class="subTitle">Experience:</div>
    <resumeItem
      v-for="(resumeObject, index) in experience"
      :key="index"
      :resumeObject="resumeObject"
    />
    <div class="subTitle">Education:</div>
    <resumeItem
      v-for="(resumeObject, index) in education"
      :key="index"
      :resumeObject="resumeObject"
    />
  </div>
</template>

<script>
import skills from "@/components/skills.vue";
import resumeItem from "@/components/resumeItem.vue";
export default {
  components: {
    skills,
    resumeItem,
  },
  data() {
    return {
      experience: [
        {
          Place: "Dolnet Group",
          Address: "Kopernika 34, Świdnica, Poland",
          From: "January 2021",
          To: "Now",
          Position: "Service desk analyst",
          Description:
            "Answering phone calls to support customers and assist them with resolving issues with their internet connection",
        },
        {
          Place: "Red Baron Hotel",
          Address: "Lwa Tołstoja 2, Świdnica, Poland",
          From: "November 2018",
          To: "June 2019",
          Position: "Receptionist",
          Description:
            "Assisting guests around the hotel. Checking In/Out guests and preforming other hotel management duties",
        },
        {
          Place: "MediaExpert",
          Address: "MediaExpert 1, Świdnica, Poland",
          From: "October 2018",
          To: "November 2018",
          Position: "Sales Assistant",
          Description:
            "Helping customers pick items that would best fit their needs",
        },
        {
          Place: "Awards Night St. Flannans",
          Address: "St. Flannans Collage, Ennis, Ireland",
          From: "October 2018",
          To: "November 2018",
          Position: "Special FX artist",
          Description:
            "Running the lights behind the scenes of the awards night. From spotlights to dancing colors. Live as the action unfolded",
        },
        {
          Place: "WOŚP Ennis",
          Address: "Ennis, Ireland",
          From: "January 2016",
          To: "January 2018",
          Position: "Audio Technician",
          Description:
            "Ensuring everyone can be heard loud and clear all around during the orchestra. This involved responsibilities from planning and sourcing the required equipment through setup and operation of it to ensuring it goes back safely to the owners of it.",
        },
        {
          Place: "Polish Irish Association",
          Address: "Ennis, Ireland",
          From: "August 2013",
          To: "October 2017",
          Position: "Volunteer",
          Description:
            "Volunteering help to the Polish Irish Association with tasks ranging from organizing the 'PolskaEire' festival to Weekend school for Polish children and Technical Support",
        },
      ],
      education: [
        {
          Place: "St. Flannans College",
          Address: "St.	Flannans College, Ennis, Ireland",
          From: "September 2013",
          To: "June 2018",
          Position: "Leaving Certiicate",
          Description: null,
        },
        {
          Place: "Szkoła podstawowa nr.8",
          Address: "Wałbrzyska 39, Świdnica, Poland",
          From: "September 2009",
          To: "June 2013",
          Position: "Junior Certificate",
          Description: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.resume {
  display: flex;
  height: 100%;
  align-items: center;
  overflow: auto;
  padding-top: 35px;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 35px;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 1600px) {
    padding-right: 5px;
    padding-left: 5px;
  }
  .subTitle {
    width: 90%;
    font-size: 3rem;
  }
}
</style>
