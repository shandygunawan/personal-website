<template>
  <div style="background-color: black;">
    <vue-particles
      color="#009688"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="1"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <div class="content d-flex flex-column justify-center align-center">
      <v-img src="@/assets/images/avatar.jpg" alt="Shandy" max-width="300" max-height="300" style="border-radius: 50%"></v-img>
        <v-container>
          <v-row>
            <v-col class="col-12 text-center">
              <span class="title-text mt-4 text-center grey--text">
                Hi! I'm Shandy,
                <br>
                <vue-typer
                  id="vuetyper_welcome_languages"
                  :text="welcome_languages"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="100"
                  erase-style="backspace"
                  :erase-on-complete="false"
                  caret-animation="blink"
                ></vue-typer>
              </span>
            </v-col>
          </v-row>
          <v-row class="my-2 d-flex justify-center">
            <v-col class="col-12 col-sm-2 pa-lg-6 text-center">
              <router-link :to="{ name: 'resume' }">
                <v-btn outlined large color="primary">Resume</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  components: {
    VueTyper
  },
  data() {
    return {
      welcome_languages: [
        "Welcome!", // English
        "Selamat datang!", // Indonesian
        "Wilujeng Sumping!", // Sundanese
        "Sugeng Rawuh!", // Javanese
        "Welkom!", // Dutch
        "Bienvenue!", // French
        "Bienvenido!", // Spanish
        "Willkommen!", // German
        "Bem-vindo!", // Portuguese
        "ようこそ!", // Japanese
        "환영합니다!" // Korean
      ]
    }
  },
  created() {
    setInterval(() => {
      this.welcome_current = this.welcome_languages[this.welcome_index];
      
      if(this.welcome_index >= this.welcome_languages.length-1) {
        this.welcome_index = 0;
      } else {
        this.welcome_index++;
      }

      this.welcome_change = !this.welcome_change;
    }, 3000);
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.background {
  background-image: url('../assets/images/wallpaper_index.jpg');
  background-size: cover;
}

.dark-layer {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}

.title-text {
  font-family: 'Comfortaa';
  font-weight: 500;
  font-size: 2rem;
}

.content {
  position: absolute;
  text-align: center;
}

#particles-js {
  height: 100vh;
}


.content {
  position: absolute;
  text-align: center;
  top: 15vh;
  width: 100%; 
}

/* VueTyper */
::v-deep #vuetyper_welcome_languages .typed {
  color: grey !important;
}

::v-deep #vuetyper_welcome_languages .custom.caret {
  width: 2px;
  background-color: grey !important;
}

</style>