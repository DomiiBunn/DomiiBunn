import Home from "@/views/Home.vue";
import dol0 from "@/views/more/dol0.vue";
//Extras
import dol1 from "@/views/more/dol1.vue";
import Projects from "@/views/Projects.vue";
import imaginecraft from "@/views/projects/imaginecraft.vue";
//Projects
import ls4 from "@/views/projects/ls4.vue";
import smarthome from "@/views/projects/smarthome.vue";
import watchy from "@/views/projects/watchy.vue";
import lam from "@/views/projects/liveActionMap.vue"


import Resume from "@/views/Resume.vue";
import Vue from "vue";
import VueRouter from "vue-router";




Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
},
{
  path: "/resume",
  name: "Resume",
  component: Resume,
},
{
  path: "/more/dol0",
  component: dol0
},
{
  path: "/more/dol1",
  component: dol1
},
{
  path: "/projects",
  name: "Projects",
  redirect: "/projects/lam",
  component: Projects,
  children: [
    {
      path: "/projects/imaginecraft",
      component: imaginecraft
    },
    {
      path: "/projects/ls4",
      component: ls4
    },
    {
      path: "/projects/watchy",
      component: watchy
    },
    {
      path: "/projects/lam",
      component: lam
    },
    {
      path: "/projects/smarthome",
      component: smarthome
    }
  ]
}
];

const router = new VueRouter({
  routes,
});

export default router;