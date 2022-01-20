<template>
  <div>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndDown"
      app
      dark
      flat
      dense
      color="teal"
      width="100%"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Resume</v-toolbar-title>

    </v-app-bar>

    <div class="d-flex">
      <!-- Sidebar -->
      <v-card
        id="sidebar"
        height="100vh"
      >

        <v-navigation-drawer 
          app
          bottom
          color="teal"
          dark
          v-model="drawer"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Shandy
              </v-list-item-title>
              <v-list-item-subtitle>
                Full Stack Developer
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            nav
          >
            <v-list-item
              v-for="menu in sidebar_menus"
              :key="menu.title"
              link
              @click="$vuetify.goTo(menu.href, { duration: 750, easing: 'easeInOutCubic' })"
              :input-value="menu.isIntersecting"
            >
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list>


        </v-navigation-drawer>
      </v-card>

      <!-- Content -->
      <div 
        id="content" 
        style="width: 100%; height: 100%; background-color: #9ed2a1"
        class="d-flex flex-column"
      >
        <!-- Profile -->
        <v-card
          id="profile"
          ref="profile"
          height="100vh"
          width="100%"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0, 0.5, 1]
            }
          }"
        >
          <v-img 
            src="@/assets/images/resume_profile.jpg" 
            alt="Shandy with a straw hat" 
            height="100vh"
            width="100%"
            class="pa-2 d-flex align-center"
            gradient="rgba(0,0,0,.5), rgba(0,0,0,.5)"
          >
            <div
              v-if="$vuetify.breakpoint.smAndUp"
              class="font-comfortaa text-center"
            >
              <h1>
                <vue-typer 
                  :text="profile_vuetyper.text"
                  :repeat="profile_vuetyper.repeat"
                  :type-delay="profile_vuetyper.typeDelay"
                  :pre-type-delay='profile_vuetyper.preTypeDelay'
                  :caret-animation='profile_vuetyper.caretAnimation'
                ></vue-typer>
              </h1>
            </div>

            <div 
              v-else
              class="font-comfortaa text-right"
            >
              <vue-typer 
                :text="profile_vuetyper.text"
                :repeat="profile_vuetyper.repeat"
                :type-delay="profile_vuetyper.typeDelay"
                :pre-type-delay='profile_vuetyper.preTypeDelay'
                :caret-animation='profile_vuetyper.caretAnimation'
              ></vue-typer>
            </div>

          </v-img>
        </v-card>
    
        <!-- Experiences -->
        <v-card
          id="experiences"
          ref="experiences"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0, 0.5, 1]
            }
          }"
          class="mt-5"
          style="background-color: #9ed2a1"
          elevation="0"
          data-aos="fade-left"
        >
          <v-card-title>
            <h1>
              <vue-typer
                text="Experiences"
                :repeat="0"
                :type-delay="40"
                :pre-type-delay="20"
                caret-animation='phase'
              ></vue-typer>
            </h1>
          </v-card-title>

          <v-card-text class="d-flex justify-center">
            <v-timeline
              align-top
              :dense="$vuetify.breakpoint.smAndDown"
            >
              <v-timeline-item
                v-for="(exp, i) in experiences"
                :key="i"
                :color="exp.color"
                :icon="exp.icon"
                fill-dot
              >
                <v-card
                  :color="exp.color"
                  dark
                >
                  <v-card-title>
                    <div style="display: inline-block; overflow-wrap: break-word;">
                      {{ exp.company }}
                    </div>
                  </v-card-title>

                  <v-card-text class="">
                    <p style="white-space: pre-line;">
                      {{ exp.description }}
                    </p>
                  </v-card-text>

                </v-card>

              </v-timeline-item>

            </v-timeline>
          </v-card-text>

        </v-card>
      </div>
    </div>
  </div>
  
</template>

<script>
//TODO: https://stackoverflow.com/questions/59614413/update-selected-item-in-vuetify-navigation-drawer-while-scrolling-vertical

import { VueTyper } from 'vue-typer';

export default {
  components: {
    VueTyper
  },
  created() {
    if(this.$vuetify.breakpoint.mdAndUp) {
      this.drawer = true;
    }
  },
  data() {
    return {
      drawer: false,
      sidebar_menus: [
        { title: 'Profile', icon: 'mdi-account', href: '#profile', isIntersecting: false },
        { title: 'Experiences', icon: 'mdi-briefcase-variant', href: '#experiences', isIntersecting: false },
        { title: 'Skills', icon: 'mdi-code-braces-box', href: '#skills', isIntersecting: false },
        { title: 'Awards', icon: 'mdi-medal', href: '#awards', isIntersecting: false },
        { title: 'Contact', icon: 'mdi-email', href: '#contact', isIntersecting: false },
      ],

      profile_vuetyper: {
        text: `
        Hi! I'm Shandy, a full stack developer.
        I'm ${this.getCurrentAge()} years old,
        and I live in Jakarta, Indonesia.
        
        I'm always looking for opportunities
        to grow as a developer.
        
        If you want to know more about me,
        feel free to scroll down.`,

        repeat: 0,
        typeDelay: 55,
        preTypeDelay: 120,
        caretAnimation: 'expand'
      },

      experiences: [
        {
          company: "ITB",
          role: "Computer Science Student",
          duration: "Aug 2016 - Apr 2021",
          icon: "mdi-school",
          color: "blue darken-2",
          description: `Learn a lot of Computer Science fundamentals, 
such as Algorithm and Data Structures, Object-Oriented Programming, Software Engineering, etc.`
        },
        {
          company: "Qontak", 
          role: "Android Developer Intern", 
          duration: "May 2019 - Aug 2019",
          icon: "mdi-android",
          color: "blue darken-1",
          description: `Working on company's mobile application using Kotlin: 
- Create and update existing User Interfaces (XML and dynamic UIs),
- Add filters for contacts list and products list,
- Implement voice recording and playback capability when adding and editing notes,
- Integrate CRM with Qiscus Multichannel (Server-side, non-Mobile).
`
        },
        {
          company: "Learncy", 
          role: "Part Time Full Stack Developer", 
          duration:"Dec 2019 - Jan 2020",
          icon: "mdi-webpack",
          color: "teal darken-1",
          description:`Working on company's various features:
- Creating history for CyCash transactions,
- Integrating CyCash top up with Midtrans Payment Gateway,
- Creating "Rasionalisasi" feature (Full Stack).
          `
        },
        {
          company: "BCA", 
          role: "Software Quality Improvement Intern", 
          duration:"Mar 2021 - Aug 2021",
          icon: "mdi-pipe-disconnected",
          color: "blue darken-4",
          description:`Helping delivery and operations:
- Building code with Jenkins,
- Developing pipeline scripts,
- Delivering code to UAT stage.
          `
        },
        {
          company: "BCA",
          role: "BCA IT Trainee",
          duration: "Sep 2021 - Now",
          icon: 'mdi-school',
          color: "blue darken-4",
          description: `- Learning theory of finances and banking
- Taking Web Programming specialization (Java: Struts, Spring)
- On The Job Training with BCA's Credit Card IT Team
- Final Project Collaboration with fellow BCA IT Trainee
          `
        }

      ]

    }
  },
  methods: {
    getCurrentAge() {
      var today = new Date();
      var birthDate = new Date("1998-09-21");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    },
    updateNavDrawerOnIntersect(entries) {
      var idx_menu = this.sidebar_menus.findIndex(item => item.title.toLowerCase() === entries[0].target.id);
      this.sidebar_menus[idx_menu].isIntersecting = entries[0].intersectionRatio >= 0.5;
    }
  }
}
</script>

<style scoped>

.font-comfortaa {
  font-family: 'Comfortaa';
}


/* Vue Typer */

/* https://github.com/cngu/vue-typer/issues/45 */
::v-deep #profile .typed {
  color: cyan !important;
}

::v-deep #profile .custom.caret {
  width: 5px;
  background-color: cyan !important;
}

::v-deep #profile .custom.caret.complete {
  display: inline-block;
}


::v-deep #experiences .custom.caret.complete {
  display: inline-block;
}

/* ANIMATION */
.bounce-4 {
    animation-name: bounce-4;
    animation-timing-function: ease;
}
@keyframes bounce-4 {
    0%   { transform: scale(1,1)    translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1) translateY(-50px); }
    50%  { transform: scale(1,1)    translateY(0); }
    100% { transform: scale(1,1)    translateY(0); }
}
.text-landing-scroll-down {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  color:var(--blue-100);
}

</style>