import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Resume from "@/views/Resume.vue"
import Projects from "@/views/Projects.vue"

//Extras
import dol1 from "@/views/more/dol1.vue"
import dol0 from "@/views/more/dol0.vue"


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
  component: Projects,
}
];

const router = new VueRouter({
  routes,
});

export default router;