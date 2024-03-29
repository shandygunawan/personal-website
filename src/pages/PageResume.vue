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
          style="border-radius: 0%;"
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
        <v-fab-transition>
          <v-btn
            v-show="$vuetify.breakpoint.mdAndDown"
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
        </v-fab-transition>

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
            style="border-radius: 0%;"
          >
            <div
              v-if="$vuetify.breakpoint.smAndUp"
              class="font-fabrikat-normal-thin text-center"
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
          class="content-background-color"
          elevation="0"
        >
          <v-card-title class="d-flex justify-center pa-10" style="background-color: teal;">
            <h1 class="white--text font-fabrikat-normal-thin">
              EXPERIENCES
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
                    {{ exp.role }} ({{ exp.duration }})
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


        <!-- Skills -->
        <v-card
          id="skills"
          ref="skills"
          elevation="0"
          class="content-background-color"
          v-intersect="{
            handler: updateNavDrawerOnIntersect,
            options: {
              threshold: [0, 0.25, 0.5, 1]
            }
          }"
        >
          <v-card-title 
            class="d-flex justify-center pa-10" 
            style="background-color: teal;"
          >
            <h1 class="white--text font-fabrikat-normal-thin">
              SKILLS
            </h1>
          </v-card-title>

          <v-card-text class="mt-5">
            <v-row 
              class="d-flex justify-center pa-2"
              v-for="skill in skills"
              :key="skill.title"
            >
              <v-col class="col-12">
                <CardSkills 
                  :skill="skill"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

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
          style="min-height: 100vh;"
          class="content-background-color"
          elevation="0"
        >
          <v-card-title class="d-flex justify-center pa-8" style="background-color: teal;">
            <h1 class="white--text font-fabrikat-normal-thin">
              AWARDS
            </h1>
          </v-card-title>

          <v-card-text class="mt-4">
            <v-row class="d-flex justify-center">
              <v-col 
                class="col-12 col-md-7"
                v-for="award in awards"
                :key="award.competition"
              >
                <CardAwardHover :award="award" />
              </v-col>
            </v-row>
          </v-card-text>

        </v-card>

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
          style="min-height: 100vh"
          elevation="0"
          class="content-background-color"
        >
          <v-card-title class="d-flex justify-center pa-8" style="background-color: teal;">
            <h1 class="white--text font-fabrikat-normal-thin">
              PROJECTS
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
            <h1 class="white--text font-fabrikat-normal-thin">
              CONTACT
            </h1>
          </v-card-title>

          <v-card-text>
            <v-row class="mt-5 d-flex justify-center">
              <v-col class="col-12 d-flex justify-center">
                
                <h4 v-if="$vuetify.breakpoint.mdAndDown" class="grey--text text-center font-fabrikat-normal-thin">
                  “If I had asked people what they wanted, they would have said faster horses. ”
                  <br>
                  - Henry Ford
                </h4>
                <h2 v-else class="grey--text text-center font-fabrikat-normal-thin">
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
                    <v-form
                      ref="form"
                      v-model="message.form"
                    >
                      <v-row>
                        <v-col class="col-12 col-md-6">
                          <v-text-field
                            v-model="message.name"
                            label="Name"
                            color="teal"
                            class="font-comfortaa"
                            :rules="rules.name"
                          ></v-text-field>
                        </v-col>
                        <v-col class="col-12 col-md-6">
                          <v-text-field
                            v-model="message.email"
                            label="Email"
                            color="teal"
                            class="font-comfortaa"
                            :rules="rules.email"
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
                            :rules="rules.message"
                          ></v-textarea>
                        </div>
                      </v-row>
                    </v-form>
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
import { getFirestore, collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import firebaseApp from '../firebaseInit.js';

import CardSkills from '@/components/resume/CardSkills.vue';
import CardAwardHover from '@/components/resume/CardAwardHover.vue';

import utils from '@/assets/js/utils.js';

var _ = require('lodash');

export default {
  components: {
    VueTyper,
    CardSkills,
    CardAwardHover
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
        typeDelay: 50,
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
          duration: "Sep 2021 - Mar 2022",
          icon: 'mdi-school',
          color: "blue darken-4",
          description:'<ul>' + 
                      '<li>Learning theory of finances and banking</li>' +
                      '<li>Taking Web Programming specialization (Java: Struts, Spring)</li>' +
                      '<li>On The Job Training with BCA\'s Credit Card IT Team</li>' +
                      '<li>Final Project Collaboration with fellow BCA IT Trainee</li>' +
                    '</ul>'
        },
        {
          company: "BCA",
          role: "Senior IT Specialist",
          duration: "Apr 2022 - Now",
          icon: 'mdi-laptop',
          color: "blue darken-4",
          description:'<p>Working on Credit Card Extended team:</p>' +
                      '<ul>' +
                      '<li>Building Java services for company\' PDF needs using Spring, Struts, and iText</li>' +
                      '<li>Monitoring and Handling various estatement batch jobs</li>' +
                      '</ul>'
        }
      ],

      skills: {
        programming_languages: {
          title: "Programming Languages",
          subskills: [
            { name: "Java", image: require("../assets/images/logo_java.svg"), link: "https://www.java.com/en/" },
            { name: "JavaScript", image: require("../assets/images/logo_javascript.svg"), link: "https://www.javascript.com/" },
            { name: "TypeScript", image: require("../assets/images/logo_typescript.svg"), link: "https://www.typescriptlang.org/" },
            { name: "Kotlin", image: require("../assets/images/logo_kotlin.svg"), link: "https://kotlinlang.org/" },
            { name: "Python", image: require("../assets/images/logo_python.svg"), link: "https://www.python.org/" },
            { name: "C++", image: require("../assets/images/logo_cpp.svg"), link: "https://cplusplus.com/" }
          ],
        },
        
        frontend: {
          title: "Front-End",
          subskills:  [
            { name: "Vue.js", image: require("../assets/images/logo_vue.svg"), link: "https://vuejs.org/" },
            { name: "Angular", image: require("../assets/images/logo_angular.svg"), link: "https://angular.io/" }
          ],
        },

        css: {
          title: "CSS",
          subskills: [
            { name: "Bootstrap", image: require("../assets/images/logo_bootstrap.svg"), link: "https://getbootstrap.com/" },
            { name: "Vuetify", image: require("../assets/images/logo_vuetify.svg"), link: "https://vuetifyjs.com/en/" },
            { name: "Materialize", image: require("../assets/images/logo_materialize.svg"), link: "https://materializecss.com/" },
            { name: "Tailwind", image: require("../assets/images/logo_tailwind.svg"), link: "https://tailwindcss.com/" }
          ]
        },

        backend: {
          title: "Back-End",
          subskills: [
            { name: "Spring", image: require("../assets/images/logo_spring.svg"), link: "https://spring.io/" },
            { name: "Flask", image: require("../assets/images/logo_flask.svg"), link: "https://flask.palletsprojects.com/en/2.1.x/" },
            { name: "Django", image: require("../assets/images/logo_django.svg"), link: "https://www.djangoproject.com/" },
            { name: "AdonisJS", image: require("../assets/images/logo_adonis.svg"), link: "https://adonisjs.com/" }
          ],
        },

        database: {
          title: "Database",
          subskills: [
            { name: "Postgres", image: require("../assets/images/logo_postgresql.svg"), link: "https://www.postgresql.org/" },
            { name: "SQLite", image: require("../assets/images/logo_sqlite.svg"), link: "https://www.sqlite.org/index.html" },
            { name: "MongoDB", image: require("../assets/images/logo_mongodb.svg"), link: "https://www.mongodb.com/" }
          ]
        },

        others: {
          title: "Others",
          subskills: [
            { name: "Git", image: require("../assets/images/logo_git.svg"), link: "https://git-scm.com/" },
            { name: "Docker", image: require("../assets/images/logo_docker.svg"), link: "https://www.docker.com/" }
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
        form: true,
        name: "",
        email: "",
        message: ""
      },

      rules: {
        name: [
          v => !!v || 'Name is required',
        ],
        email: [
          v => !!v || 'Email is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) || 'Email must be valid'
        ],
        message: [
          v => !!v || 'Message is required'
        ]
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

    async sendMessage() {

      if(!this.$refs.form.validate()) {
        alert("Please fill out the form correctly.");
        return;
      }

      try {
        const msg = await addDoc(collection(this.firebase_firestore, "messages"), {
          name: this.message.name,
          email: this.message.email,
          message: this.message.message,
          datetime: Timestamp.fromDate(new Date())
        });

        console.log(msg);
      }
      catch(error) {
        console.log(error);
      }

      this.$refs.form.reset();
      this.$refs.form.resetValidation();
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
    clearMessageForm() {
      this.message.name = "";
      this.message.email = "";
      this.message.message = "";
    },

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
        
        // Special case for Skills section
        if(idx_menu === 2) {
          this.sidebar_menus[idx_menu].isIntersecting = entries[0].intersectionRatio >= 0.25;
        }
        else {
          this.sidebar_menus[idx_menu].isIntersecting = entries[0].intersectionRatio >= 0.5;
        }
      } 
      else {
        this.sidebar_menus[idx_menu].isIntersecting = false;
      }

    }
  }
}
</script>

<style scoped>

.font-comfortaa {
  font-family: 'Comfortaa';
}

.font-fabrikat-normal-thin {
  font-family: 'FabrikatNormalThin';
}

a {
  text-decoration: none;
}

.content-background-color {
  background-color: #9ed2a1;
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