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
              <span class="title-text mt-4 text-center">
                Hi! I'm Shandy
              </span>
            </v-col>
          </v-row>
          <v-row class="my-2 d-flex justify-center">
            <v-col class="col-12 col-sm-2 pa-lg-6 text-center">
              <router-link :to="{ name: 'resume' }">
                <v-btn outlined large color="primary">Resume</v-btn>
              </router-link>
            </v-col>
            <v-col class="col-12 col-sm-2 pa-lg-6 text-center">
              <router-link to="">
                <v-btn outlined large color="primary">Projects</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: gray;
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
  top: 20vh;
  width: 100%;
}


</style>