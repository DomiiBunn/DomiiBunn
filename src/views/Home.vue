<template>
  <div class="home">
    <div class="info-card">
      <div class="picture">
        <img src="@/assets/picture.png" />
      </div>
      <div class="name">Dominika Jadowska</div>
      <div class="line" />
      <div class="title">Service desk analyst</div>
      <div class="socials">
        <div @click="handleSocial('discord')" class="social">
          <i class="fab fa-discord"></i>
        </div>
        <div @click="handleSocial('twitch')" class="social">
          <i class="fab fa-twitch"></i>
        </div>
        <div @click="handleSocial('instagram')" class="social">
          <i class="fab fa-instagram"></i>
        </div>
        <div @click="handleSocial('github')" class="social">
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="header">Hi there!</div>
      <div class="sub-header">Here is some facts about me</div>
      <div class="buttons">
        <div @click="handleButtons('resume')" class="button">Resume</div>
        <!-- <div @click="handleButtons('projects')" class="button">Projects</div> -->
      </div>
      <div class="paragraph">
        I don't call myself above average. I do love what I do and want to grow
        to become great at it. Coding is not a job but a hobby for me thus I
        code with love and a smile on my face. <br />
        I play League of Legends and stream on Twitch in my free time.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSocial(social) {
      switch (social) {
        case "discord":
          window.open("https://discord.gg/v3Aa5h6yZC", "_blank");
          break;
        case "twitch":
          window.open("https://www.twitch.tv/domiibunni", "_blank");
          break;
        case "instagram":
          window.open("http://instagram.com/domiibunn", "_blank");
          break;
        case "github":
          window.open("http://github.com/domiiBunn/", "_blank");
          break;

        default:
          break;
      }
    },
    handleButtons(button) {
      this.$router.push(`/${button}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-right: 30%;
  padding-left: 30%;
  gap: 15px;
  overflow: auto;
  @media screen and (max-width: 1600px) {
    flex-direction: column;
    padding-right: 5px;
    padding-left: 5px;
  }
  .info-card {
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 600px) {
      margin-top: 50px;
      padding-top: 10px;
    }
    .picture {
      height: 150px;
      width: 150px;
      border-radius: 100%;
      background-color: rgb(88, 15, 88);
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 140px;
        width: 140px;
        background-color: white;
        border-radius: 50%;
      }
    }
    .name {
      font-family: "Great Vibes", cursive;
      font-size: 1.5rem;
    }
    .line {
      width: 80%;
      border-top: 1px solid blue;
    }
    .title {
      padding-top: 5px;
    }
    .socials {
      display: flex;
      gap: 15px;
      padding-top: 20px;
      font-size: 2rem;
    }
    .social {
      text-shadow: none;
      transition: text-shadow 150ms linear;
      cursor: pointer;
    }
    .social:hover {
      text-shadow: 0 0 10px rgba(88, 15, 88, 0.4);
    }
    .socials .fa-discord {
      color: #5865f2;
    }
    .socials .fa-twitch {
      color: #6441a5;
    }
    .socials .fa-instagram {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .socials .fa-github {
      color: #24292e;
    }
  }
  .description {
    .header {
      font-size: 3rem;
    }
    .sub-header {
      font-size: 2rem;
    }
    .buttons {
      display: flex;
      justify-content: center;
      padding: 20px;
      .button:first-of-type {
        background-color: rgb(88, 15, 88);
      }
      .button:last-of-type {
        background-color: blue;
      }
    }
  }
}
</style>
