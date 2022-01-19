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
        style="width: 100%; background-color: #9ed2a1"
        class="d-flex flex-column"
      >

        <!-- Intro -->
        <v-card
          height="100vh"
          width="100%"
        >
          <v-img 
            src="@/assets/images/resume_intro.jpg" 
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
                  :text="intro_vuetyper.text"
                  :repeat="intro_vuetyper.repeat"
                  :type-delay="intro_vuetyper.typeDelay"
                  :pre-type-delay='intro_vuetyper.preTypeDelay'
                  :caret-animation='intro_vuetyper.caretAnimation'
                ></vue-typer>
              </h1>
            </div>

            <div 
              v-else
              class="font-comfortaa text-right"
            >
              <vue-typer 
                :text="intro_vuetyper.text"
                :repeat="intro_vuetyper.repeat"
                :type-delay="intro_vuetyper.typeDelay"
                :pre-type-delay='intro_vuetyper.preTypeDelay'
                :caret-animation='intro_vuetyper.caretAnimation'
                @typed="enableIntroIconScrollDown"
              ></vue-typer>
            </div>

          </v-img>
        </v-card>

        <!-- Profile -->
        <p>Test</p>

      </div>
    </div>
  </div>
  
</template>

<script>
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
        { title: 'Profile', icon: 'mdi-account' },
        { title: 'Experiences', icon: 'mdi-briefcase-variant' },
        { title: 'Skills', icon: 'mdi-code-braces-box' },
        { title: 'Awards', icon: 'mdi-medal' },
        { title: 'Contact', icon: 'mdi-email' },
      ],

      intro_vuetyper: {
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
        caretAnimation: 'expand',
        icon_scroll_down: false
      }

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
    enableIntroIconScrollDown() {
      this.intro_vuetyper.icon_scroll_down = true;
    }
  }
}
</script>

<style scoped>

.font-comfortaa {
  font-family: 'Comfortaa';
}

.background-image {
  background-image: url('../assets/images/resume_intro.jpg');
  background-size: auto;
}


/* Vue Typer */

/* https://github.com/cngu/vue-typer/issues/45 */
::v-deep .typed {
  color: cyan !important;
}

::v-deep .custom.caret {
  width: 5px;
  background-color: cyan !important;
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