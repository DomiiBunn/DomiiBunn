<template>
  <div class="page-content">
    <div class="section-title">Contact:</div>
    <div class="page-section">
      <div class="section-listing-sm">
        <a
          v-for="(contact, index) in contacts"
          :key="index"
          class="listing-item-sm font-medium"
          target="_blank"
          :href="contact.value"
        >
          <i :class="contact.icon"></i>
          <div class="listing-text">{{ contact.text }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          icon: "fa-solid fa-envelope",
          text: "contact@domiibunn.live",
          value: "mailto:contact@domiibunn.live",
        },
        {
          icon: "fa-brands fa-instagram",
          text: "domiibunn",
          value: "https://www.instagram.com/domiibunn/",
        },
        {
          icon: "fa-brands fa-linkedin-in",
          text: "Dominika Jadowska",
          value: "https://www.linkedin.com/in/dominika-jadowska-204708231/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.font-medium {
  font-size: 1.5rem;
}
</style>
