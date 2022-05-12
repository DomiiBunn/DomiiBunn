<template>
  <div class="page">
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
          Place: "ICON Communication Centres s.r.o.",
          Address: "Křižíkova 237/36A, 186 00 Praha 8-Karlín",
          From: "March 2022",
          To: "Now",
          Position: "Microsoft Support Advocate",
          Description:
            "Working with Microsoft Support Experts to guide them and ensure Customer Satisfaction with the support service provided by Microsoft. Tracking expert statistics, providing them guidance on the necessary subjects.",
        },
        {
          Place: "Dolnet Group",
          Address: "Kopernika 34, Świdnica, Poland",
          From: "October 2021",
          To: "February 2022",
          Position: "Networking Specialist",
          Description:
            "Working with WISP(Wireless ISP) and (gPON) networks, ensuring network stability, ensuring correct routing for clients, creating and supporting company website, remotely supporting field technicians, implementing new methods for network deployments, ensuring VoIP stability, debugging 3rd party IPTV systems and preparing networking gear for deployment.",
          Action: "dol1",
        },
        {
          Place: "Dolnet Group",
          Address: "Kopernika 34, Świdnica, Poland",
          From: "January 2021",
          To: "October 2021",
          Position: "Service desk analyst",
          Description:
            "Answering phone calls to support customers and assist them with resolving issues with their internet connection",
          Action: "dol0",
        },
        {
          Place: "Red Baron Hotel",
          Address: "Lwa Tołstoja 2, Świdnica, Poland",
          From: "November 2018",
          To: "June 2019",
          Position: "Receptionist",
          Description:
            "Assisting guests around the hotel. Checking In/Out guests and performing other hotel management duties",
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
