<template>
  <div class="page-content">
    <div class="section-title">Skills:</div>
    <div class="page-section">
      <skillsListingVue :skills="skills" />
    </div>
    <div class="section-title">Experience:</div>
    <div
      class="page-section"
      v-for="(item, experienceIndex) in experience"
      :key="experienceIndex"
    >
      <div class="section-title">
        {{ item.title }} <span class="company">{{ item.company }}</span>
      </div>
      <div class="dates">{{ item.startDate }} - {{ item.endDate }}</div>
      <div
        class="section-listing-sm"
        v-for="(keypoint, keypointsIndex) in item.keypoints"
        :key="keypointsIndex"
      >
        <div class="listing-item-sm">
          <i class="fa-regular fa-circle-dot"></i> {{ keypoint }}
        </div>
      </div>
      <div class="statement">{{ item.statement }}</div>
    </div>
    <div class="section-title">Education:</div>
    <div
      class="page-section"
      v-for="(item, educationIndex) in education"
      :key="educationIndex"
    >
      <div class="section-title">
        {{ item.title }} <span class="company">{{ item.company }}</span>
      </div>
      <div class="dates">{{ item.startDate }} - {{ item.endDate }}</div>
      <div
        class="section-listing-sm"
        v-for="(keypoint, educationKeypointsIndex) in item.keypoints"
        :key="educationKeypointsIndex"
      >
        <div class="listing-item-sm">
          <i class="fa-regular fa-circle-dot"></i> {{ keypoint }}
        </div>
      </div>
      <div class="statement">{{ item.statement }}</div>
    </div>
  </div>
</template>

<script>
import skillsListingVue from "@/components/cv/skills-listing.vue";
export default {
  components: {
    skillsListingVue,
  },
  data() {
    return {
      skills: [
        "Vue.js Framework",
        "JavaScript (ES6+)",
        "Single Page Applications (SPAs)",
        "Component-Based Architecture",
        "Problem-Solving",
        "Communication",
        "Customer Focus",
        "Process Improvement",
        "Node.js Development",
        "Asynchronous Programming",
        "Express.js Framework",
        "Troubleshooting",
        "Technical Knowledge",
        "Ticket Management",
      ],
      experience: [
        {
          company: "Invicti Security",
          title: "Technical Support Expert",
          startDate: "September 2022",
          endDate: "Present",
          keypoints: [
            "Provided technical support to customers, addressing inquiries and support tickets promptly.",
            "Utilized expertise in JavaScript and Linux to diagnose and resolve software and hardware issues.",
            "Collaborated with the service desk team to triage and prioritize support requests for efficient resolution.",
            "Ensured a customer-focused approach, delivering appropriate solutions to enhance customer experience.",
            "Contributed to continuous improvement of technical support processes for optimized service quality.",
          ],
          statement:
            "This experience showcases my strong troubleshooting skills, customer service expertise, and technical knowledge, enabling me to deliver exceptional support to clients while contributing to the success of Invicti Security.",
        },
        {
          company: "ICON Communication Centres s.r.o.",
          title: "Microsoft Support Advocate",
          startDate: "Mar 2022",
          endDate: "Aug 2022",
          keypoints: [
            "Provided Microsoft support to customers, addressing inquiries and resolving issues.",
            "Utilized JavaScript knowledge for troubleshooting and improving customer experience.",
            "Demonstrated excellent communication and analytical skills.",
          ],
          statement:
            "During my time at ICON Communication Centres, I honed my skills in Microsoft support and effective communication, contributing to the overall success of the company.",
        },
        {
          company: "Dolnet Group sp zoo",
          title: "Help Desk Specialist / NOC Operator",
          startDate: "Jan 2021",
          endDate: "Feb 2022",
          keypoints: [
            "Provided help desk support and operated the network operations center (NOC).",
            "Demonstrated problem-solving skills and effective communication.",
            "Showcased leadership abilities and strong analytical skills.",
          ],
          statement:
            "During my tenure at Dolnet Group, I excelled as a Help Desk Specialist and NOC Operator, handling various technical challenges with leadership and problem-solving.",
        },
        {
          company: "Red Baron Hotel",
          title: "Receptionist",
          startDate: "November 2018",
          endDate: "June 2019",
          keypoints: [
            "Assisted guests around the hotel and managed check-in/check-out procedures.",
            "Performed various hotel management duties with efficiency and professionalism.",
          ],
          statement:
            "As a Receptionist at Red Baron Hotel, I provided excellent service to guests, ensuring their stay was comfortable and memorable.",
        },
        {
          company: "MediaExpert",
          title: "Sales Assistant",
          startDate: "October 2018",
          endDate: "November 2018",
          keypoints: [
            "Assisted customers in selecting items that best fit their needs.",
            "Provided excellent customer service and product knowledge.",
          ],
          statement:
            "During my time at MediaExpert, I actively engaged with customers, helping them make informed purchase decisions.",
        },
        {
          company: "Awards Night St. Flannans",
          title: "Special FX artist",
          startDate: "October 2018",
          endDate: "November 2018",
          keypoints: [
            "Managed lighting effects behind the scenes of the awards night.",
            "Operated spotlights and implemented dancing colors to enhance the atmosphere.",
          ],
          statement:
            "As a Special FX artist at Awards Night St. Flannans, I contributed to creating captivating visual experiences during the event.",
        },
        {
          company: "WOŚP Ennis",
          title: "Audio Technician",
          startDate: "January 2016",
          endDate: "January 2018",
          keypoints: [
            "Ensured clear and effective audio during orchestra performances.",
            "Managed planning, setup, and operation of audio equipment.",
          ],
          statement:
            "During my time as an Audio Technician at WOŚP Ennis, I played a crucial role in delivering exceptional audio quality during orchestra performances.",
        },
        {
          company: "Polish Irish Association",
          title: "Volunteer",
          startDate: "August 2013",
          endDate: "October 2017",
          keypoints: [
            "Volunteered for various tasks, including organizing the 'PolskaEire' festival and Weekend school for Polish children.",
            "Provided technical support for events and activities.",
          ],
          statement:
            "As a volunteer at the Polish Irish Association, I actively contributed to community events and technical support.",
        },
      ],
      education: [
        {
          company: "St. Flannans College",
          title: "Leaving Certificate",
          startDate: "September 2013",
          endDate: "June 2018",
          keypoints: [],
          statement:
            "Completed my Leaving Certificate at St. Flannans College, Ennis, Ireland, which provided a strong foundation for my academic and personal growth.",
        },
        {
          company: "Szkoła podstawowa nr.8",
          title: "Junior Certificate",
          startDate: "September 2009",
          endDate: "June 2013",
          keypoints: [],
          statement:
            "Attained my Junior Certificate at Szkoła podstawowa nr.8, Świdnica, Poland, where I developed essential skills and knowledge during my early education.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
