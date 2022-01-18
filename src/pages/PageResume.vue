<template>

  <div>
    <v-toolbar
      v-if="$vuetify.breakpoint.mdAndDown"
      dark
      flat
      dense
      color="teal"
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


      <div 
        id="content" 
        style="width: 100%; background-color: #9ed2a1"
        class="pa-5"
      >
        <v-row>
          <v-col class="col-12">
            <v-card>
              <v-card-title>
                <h1 class="font-comfortaa">Profile</h1>
              </v-card-title>
              <v-card-text>
                <v-row class="mt-2">
                  <v-col class="col-4">
                    <v-img src="@/assets/images/avatar.jpg" alt="Shandy" max-width="200" max-height="200"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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

</style>