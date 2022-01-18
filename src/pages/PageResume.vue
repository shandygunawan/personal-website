<template>

  <div>
    <v-toolbar
      v-if="$vuetify.breakpoint.mdAndDown"
      dark
      flat
      dense
      color="teal"
      width="100vh"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Resume</v-toolbar-title>

    </v-toolbar>

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
            class="pa-2"
          >
            <v-overlay>
              <h2>Test</h2>
            </v-overlay>
            
          </v-img>
        </v-card>

        <!-- Profile -->
        <p>Test</p>

      </div>
    </div>
  </div>
  
</template>

<script>

export default {
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

</style>