<template>
  <div>
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
        style="width: 100%; height: 100%;"
        class="d-flex flex-column"
      >
        <v-btn
          v-if="$vuetify.breakpoint.mdAndDown"
          @click="drawer = !drawer"
          fab
          bottom
          right
          color="teal"
          dark
          fixed
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <!-- Profile -->
        <v-card
          id="profile"
          ref="profile"
          height="100vh"
          width="100%"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0.5, 1]
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
              threshold: [0, 0.25, 0.5, 1]
            }
          }"
          class="py-8"
          color="#9ed2a1"
          elevation="0"
        >
          <v-card-title class="d-flex justify-center">
            <h1>
              <vue-typer
                text="Experiences"
                :repeat='Infinity'
                :type-delay="40"
                :pre-type-delay="20"
                caret-animation='phase'
                data-aos="fade-right"
                class="font-comfortaa"
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
                data-aos="fade-down"
              >
                <v-card
                  :color="exp.color"
                  dark
                  data-aos="fade-down"
                >
                  <v-card-title>
                    <div style="display: inline-block; overflow-wrap: break-word;">
                      {{ exp.company }}
                    </div>
                  </v-card-title>

                  <v-card-subtitle>
                    {{ exp.role }}
                  </v-card-subtitle>

                  <v-card-text 
                    v-html="exp.description"
                    class="white--text"
                    >
                  </v-card-text>

                </v-card>

              </v-timeline-item>

            </v-timeline>
          </v-card-text>

        </v-card>

        <v-divider></v-divider>

        <!-- Skills -->
        <v-card
          id="skills"
          ref="skills"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0.5, 1]
            }
          }"
          class="py-8"
        
          elevation="0"
          color="green lighten-2"
        >
          <v-card-title class="d-flex justify-center">
            <h1>
              <vue-typer
                text="Skills"
                :repeat='Infinity'
                :type-delay="40"
                :pre-type-delay="20"
                caret-animation='phase'
                data-aos="fade-right"
                class="font-comfortaa"
              ></vue-typer>
            </h1>
          </v-card-title>

          <v-card-text class="mt-5">
            <v-row 
              class="d-flex justify-center"
              v-for="skill in skills"
              :key="skill.title"
            >
              <v-col class="col-12 col-md-6">
                <SkillProgressBarCard 
                  :skill="skill"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-divider></v-divider>

        <!-- Awards -->
        <v-card
          id="awards"
          ref="awards"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0.5, 1]
            }
          }"
          class="py-8"
          style="min-height: 100vh;"
          color="teal lighten-4"
          elevation="0"
        >
          <v-card-title class="d-flex justify-center">
            <h1>
              <vue-typer
                text="Awards"
                :repeat='Infinity'
                :type-delay="40"
                :pre-type-delay="20"
                caret-animation='phase'
                data-aos="fade-right"
                class="font-comfortaa"
              ></vue-typer>
            </h1>
          </v-card-title>

          <v-card-text class="mt-4">
            <v-row class="d-flex justify-center">
              <v-col 
                class="col-12 col-md-7"
                v-for="award in awards"
                :key="award.competition"
              >
                <AwardHoverCard :award="award" />
              </v-col>
            </v-row>
          </v-card-text>

        </v-card>

        <v-divider></v-divider>

        <!-- Projects -->
        <v-card
          id="projects"
          ref="projects"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0.5, 1]
            }
          }"
          class="py-8"
          style="min-height: 100vh"
          elevation="0"
          color="cyan lighten-3"
        >
          <v-card-title class="d-flex justify-center">
            <h1>
              <vue-typer
                text="Projects"
                :repeat='Infinity'
                :type-delay="40"
                :pre-type-delay="20"
                caret-animation='phase'
                data-aos="fade-right"
                class="font-comfortaa"
              ></vue-typer>
            </h1>
          </v-card-title>

          <v-card-text class="mt-10">
            <v-row>
              <v-col class="col-12">
                <h2>Choose one or more categories to filter!</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-12 col-md-6">
                <v-autocomplete
                  v-model="projects.categories_selected"
                  :items="projects.categories"
                  dense
                  chips
                  small-chips
                  label="Categories"
                  multiple
                  @change="updateProjectsFiltered"
                ></v-autocomplete>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="col-12">
                <h2>and have some fun!</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-12">
                <v-btn small color="primary" depressed @click="shuffleProjectsFiltered" class="mr-2">shuffle!</v-btn>
                <v-btn small color="secondary" depressed @click="pickRandomColorCardProjects">Colorize!</v-btn>
              </v-col>
            </v-row>

            <transition-group name="project-list" tag="div" class="row">
                <v-col 
                  class="col-12 col-md-6 col-lg-4"
                  v-for="project in projects.filtered"
                  :key="project.name"
                >
                  <v-card 
                    elevation="0"
                    :color="projects.color_selected"
                  >
                    <v-card-title>{{ project.name }}</v-card-title>
                    <v-card-subtitle>Category: {{ project.category }}</v-card-subtitle>
                    <v-card-text>
                      <v-row>
                        <v-col class="col-12">
                          <p>{{ project.description }}</p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="col-4">
                          <b>Language: </b>
                        </v-col>
                        <v-col class="col-8">
                          : {{ project.languages }}
                        </v-col>    
                      </v-row>
                      <v-row>
                        <v-col class="col-4">
                          <b>Tools</b>
                        </v-col>
                        <v-col class="col-8">
                          : {{ project.tools }}
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions class="d-flex justify-end">
                      <a :href="project.url_github">
                        <v-btn 
                          v-if="project.url_github !== ''"
                          icon
                          color="secondary"
                          x-large
                        >
                          <v-icon>mdi-github</v-icon>
                        </v-btn>
                      </a>

                      <a :href="project.url_external">
                        <v-btn 
                          v-if="project.url_external !== ''"
                          icon
                          color="secondary"
                          x-large
                        >
                          <v-icon>mdi-link-variant</v-icon>
                        </v-btn>
                      </a>
                    </v-card-actions>
                  </v-card>

                </v-col>
            </transition-group>

          </v-card-text>

        </v-card>

        <!-- Contact -->
        <v-card
          id="contact"
          ref="contact"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0.5, 1]
            }
          }"
          class="pt-13"
          style="background-color: #434242; height: 100%;"
          elevation="0"
        >

          <v-card-title class="d-flex justify-center">
            <h1 class="white--text font-comfortaa">
              Contact
            </h1>
          </v-card-title>

          <v-card-text>
            <v-row class="mt-5 d-flex justify-center">
              <v-col class="col-12 d-flex justify-center">
                
                <h4 v-if="$vuetify.breakpoint.mdAndDown" class="grey--text text-center">
                  “If I had asked people what they wanted, they would have said faster horses. ”
                  <br>
                  - Henry Ford
                </h4>
                <h2 v-else class="grey--text text-center">
                  “If I had asked people what they wanted, they would have said faster horses. ”
                  <br>
                  - Henry Ford
                </h2>
              </v-col>
            </v-row>

            <v-row class="my-5 d-flex justify-center">
              <v-col class="col-12 d-flex justify-center">
                <v-divider color="gray" light></v-divider>
              </v-col>
            </v-row>

            <v-row class="mt-10 mb-10 d-flex justify-center">
              <v-col class="col-4 col-md-2 d-flex justify-center">
                <a href="https://github.com/shandygunawan">
                  <v-hover v-slot="{ hover}">
                    <v-icon 
                      size="75"
                      :color="hover ? 'teal' : 'white'"
                    >
                      mdi-github
                    </v-icon>
                  </v-hover>
                </a>
              </v-col>
              <v-col class="col-4 col-md-2 d-flex justify-center">
                <a href="mailto:shandy.gunawan@rocketmail.com">
                  <v-hover v-slot="{ hover}">
                    <v-icon 
                      size="75"
                      :color="hover ? 'teal' : 'white'"
                    >
                      mdi-email
                    </v-icon>
                  </v-hover>
                </a>
              </v-col>
              <v-col class="col-4 col-md-2 d-flex justify-center">
                <a href="https://www.linkedin.com/in/shandy-gunawan/">
                  <v-hover v-slot="{ hover}">
                    <v-icon 
                      size="75"
                      :color="hover ? 'teal' : 'white'"
                    >
                      mdi-linkedin
                    </v-icon>
                  </v-hover>
                </a>
              </v-col>
            </v-row>

            <v-row class="my-10 d-flex justify-center">
              <v-col class="col-12 col-md-6">
                <v-card color="#BBDEFB">
                  <v-card-title class="font-comfortaa">Send me a message!</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col class="col-12 col-md-6">
                        <v-text-field
                          v-model="message.name"
                          label="Name"
                          color="teal"
                          class="font-comfortaa"
                        ></v-text-field>
                      </v-col>
                      <v-col class="col-12 col-md-6">
                        <v-text-field
                          v-model="message.email"
                          label="Email"
                          color="teal"
                          class="font-comfortaa"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <div class="v-col col-12">
                        <v-textarea
                          v-model="message.message"
                          auto-grow
                          label="Message"
                          rows="4"
                          row-height="30"
                          color="teal"
                          class="font-comfortaa"
                        ></v-textarea>
                      </div>
                    </v-row>
                  </v-card-text>

                  <v-card-actions class="pa-3 d-flex justify-end">
                    <v-btn dark depressed color="teal" @click="sendMessage">Send!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

          </v-card-text>

        </v-card>

      </div>
    </div>
  </div>
  
</template>

<script>
//TODO: https://stackoverflow.com/questions/59614413/update-selected-item-in-vuetify-navigation-drawer-while-scrolling-vertical

import { VueTyper } from 'vue-typer';

// Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../firebaseInit.js';

import SkillProgressBarCard from '@/components/SkillProgressBarCard.vue';
import AwardHoverCard from '@/components/AwardHoverCard.vue';

import utils from '@/assets/js/utils.js';

var _ = require('lodash');

export default {
  components: {
    VueTyper,
    SkillProgressBarCard,
    AwardHoverCard
  },
  created() {
    if(this.$vuetify.breakpoint.mdAndUp) {
      this.drawer = true;
    }

    this.getProjects();
  },
  data() {
    return {
      drawer: false,
      firebase_firestore: null,
      sidebar_menus: [
        { title: 'Profile', icon: 'mdi-account', href: '#profile', isIntersecting: false },
        { title: 'Experiences', icon: 'mdi-briefcase-variant', href: '#experiences', isIntersecting: false },
        { title: 'Skills', icon: 'mdi-code-braces-box', href: '#skills', isIntersecting: false },
        { title: 'Awards', icon: 'mdi-medal', href: '#awards', isIntersecting: false },
        { title: 'Projects', icon: 'mdi-apps', href: "#projects", isIntersecting: false },
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
          description:'<p>Learn a lot of Computer Science fundamentals, such as Algorithm and Data Structures, Object-Oriented Programming, Software Engineering, etc.</p>'
        },
        {
          company: "Qontak", 
          role: "Android Developer Intern", 
          duration: "May 2019 - Aug 2019",
          icon: "mdi-android",
          color: "blue darken-1",
          description:'<p>Working on company\'s mobile application using Kotlin:</p>' + 
                      '<ul>' +
                        '<li>Create and update existing User Interfaces (XML and dynamic UIs)</li>' +
                        '<li>Add filters for contacts list and products list</li>' +
                        '<li>Implement voice recording and playback capability when adding and editing notes</li>' +
                        '<li>Integrate CRM with Qiscus Multichannel (Server-side, non-Mobile)</li>' +
                      '</ul>'
        },
        {
          company: "Learncy", 
          role: "Part Time Full Stack Developer", 
          duration:"Dec 2019 - Jan 2020",
          icon: "mdi-webpack",
          color: "teal darken-1",
          description:'<p>Working on company\'s various features:</p>' + 
                      '<ul>' +
                        '<li>Creating history for CyCash transactions</li>' +
                        '<li>Integrating CyCash top up with Midtrans Payment Gateway</li>' +
                        '<li>Creating "Rasionalisasi" feature (Full Stack)</li>' +
                      '</ul>'
        },
        {
          company: "BCA", 
          role: "Software Quality Improvement Intern", 
          duration:"Mar 2021 - Aug 2021",
          icon: "mdi-pipe-disconnected",
          color: "blue darken-4",
          description:'<p>Helping delivery and operations:</p>' + 
                      '<ul>' +
                        '<li>Building code with Jenkins</li>' +
                        '<li>Developing pipeline scripts</li>' +
                        '<li>Delivering code to UAT stage</li>' +
                      '</ul>'
        },
        {
          company: "BCA",
          role: "BCA IT Trainee",
          duration: "Sep 2021 - Now",
          icon: 'mdi-school',
          color: "blue darken-4",
          description:'<ul>' + 
                      '<li>Learning theory of finances and banking</li>' +
                      '<li>Taking Web Programming specialization (Java: Struts, Spring)</li>' +
                      '<li>On The Job Training with BCA\'s Credit Card IT Team</li>' +
                      '<li>Final Project Collaboration with fellow BCA IT Trainee</li>' +
                    '</ul>'
        }
      ],

      skills: {
        programming_languages: {
          title: "Programming Languages",
          color: "teal",
          subskills: [
            { name: "Python", value: 100, image: require("../assets/images/logo_python.svg") },
            { name: "JavaScript", value: 100, image: require("../assets/images/logo_javascript.svg") },
            { name: "TypeScript", value: 90, },
            { name: "Java", value: 90, image: require("../assets/images/logo_java.svg") },
            { name: "Kotlin", value: 85, image: require("../assets/images/logo_kotlin.svg") },
            { name: "C++", value: 80 },
            { name: "C#", value: 75 },
            { name: "Ruby", value: 65 }
          ],
        },
        
        frontend: {
          title: "Front-End",
          color: "blue lighten-1",
          subskills:  [
            { name: "Vue.js", value: 100 },
            { name: "Angular", value: 65 }
          ],
        },

        css: {
          title: "CSS",
          color: "red darken-3",
          subskills: [
            { name: "Bootstrap", value: 100 },
            { name: "Vuetify", value: 100 },
            { name: "Materialize", value: 95 },
            { name: "Tailwind", value: 50 }
          ]
        },

        backend: {
          title: "Back-End",
          color: "blue-grey",
          subskills: [
            { name: "Flask", value: 100 },
            { name: "Django", value: 90 },
            { name: "Spring Boot", value: 85 },
            { name: "AdonisJS", value: 80 },
            { name: "Ruby on Rails", value: 60 }
          ],
        },

        database: {
          title: "Database",
          subskills: [
            { name: "Postgres", value: 100 },
            { name: "SQLite", value: 90 },
            { name: "MongoDB", value: 80 }
          ]
        }
      },

      awards: [
        {
          image: require("../assets/images/awards_jenius.jpg"),
          competition: "Jenius Hackathon 2019",
          result: "National Top 7",
          date: "Feb 2019",
          alt: "Jenius Hackathon 2019 - National Top 7",
          description: `Developed a group banking product called CashTroops.
CashTroops is projected to be an extension feature of Jenius' already existing mobile app and offers multiple Jenius users' account to be united into one or more groups.
Group's abilities including shared account, set incoming events, ease of payments (QR), and transparency. CashTroops is developed with the goal to ease an organization or best friends management of money.
          `
        },
        {
          image: require("../assets/images/awards_telestra.jpg"),
          competition: "Telestra IoT Cloud Computing Competition",
          result: "1st Place",
          date: "Nov 2018",
          alt: "Telestra IoT Cloud Computing Competition - 1st Place",
          description: `Developed an IoT heartbeat detector called HerB.
HerB is developed with the goal to improve people's awareness of their heart condition and start to live their life healthier. HerB is created using NodeMCU as the detector, Android as the mobile application, and Firebase as the real time database.
          `
        }
      ],

      projects: {
        all: [],
        filtered: [],
        categories: [],
        categories_selected: [],
        colors: ['white', 'grey lighten-3', 'teal lighten-3', 'light-blue lighten-3', 'yellow lighten-3', 'orange lighten-3', 'purple lighten-3', 'lime lighten-3', 'cyan lighten-3', 'indigo lighten-3'],
        color_selected: 'indigo lighten-3'
      },

      message: {
        name: "",
        email: "",
        message: ""
      }

    }
  },

  methods: {
    //
    // FIREBASE
    //
    initializeFirestore() {
      this.firebase_firestore = getFirestore(firebaseApp);
    },

    async getProjects() {

      if(this.firebase_firestore == null) {
        this.initializeFirestore();
      }

      const querySnapshot = await getDocs(collection(this.firebase_firestore, "projects"));
      querySnapshot.forEach( (project) => {
        this.projects.all.push(project.data());
        this.projects.filtered.push(project.data());
      });

      for(const project of this.projects.all) {
        if(this.projects.categories.includes(project.category) == false) {
          this.projects.categories.push(project.category);
        }
      }
    },

    sendMessage() {
      alert("Message sent!");
    },


    // EVENTS
    updateProjectsFiltered() {
      if(this.projects.categories_selected.length === 0) {
        this.projects.filtered = this.projects.all;
      }
      else {
        this.projects.filtered = this.projects.all.filter( (project) => {
          return this.projects.categories_selected.includes(project.category);
        });
      }
    },
    shuffleProjectsFiltered() {
      this.projects.filtered = _.shuffle(this.projects.filtered);
    },
    pickRandomColorCardProjects() {
      this.projects.color_selected = this.projects.colors[Math.floor(Math.random() * this.projects.colors.length)];
    },

    //
    // UTILS
    //
    getCurrentAge() {
      return utils.getAge("1998-09-21");
    },

    getSkillLevel(value) {
      if(value >= 90) {
        return "Advanced"
      }
      else if(value >= 75) {
        return "Intermediate"
      }
      else if(value >= 60) {
        return "Familiar"
      }
      else {
        return "Beginner"
      }
    },

    //
    // NAV DRAWER
    //
    updateNavDrawerOnIntersect(entries) {
      // Responsive nav drawer on scroll seems only working on desktop, I don't know why
      var idx_menu = this.sidebar_menus.findIndex(item => item.title.toLowerCase() === entries[0].target.id);
      if(this.$vuetify.breakpoint.lgAndUp) {
        this.sidebar_menus[idx_menu].isIntersecting = entries[0].intersectionRatio >= 0.5;
      }

    }
  }
}
</script>

<style scoped>

.font-comfortaa {
  font-family: 'Comfortaa';
}

a {
  text-decoration: none;
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


.project-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.project-list-enter-active {
  transition: all 0.7s ease-out;
}

.project-list-enter-to,
.project-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.project-list-leave-active {
  transition: all 0.7s ease-in;
  position: absolute;
}

.project-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.project-list-move {
  transition: transform 1s ease;
}

</style>