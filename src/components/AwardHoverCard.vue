<template>
  <v-hover v-slot="{ hover }">
    <v-card>
      <v-img
        :src="award.image"
        gradient="rgba(0,0,0,.6), rgba(0,0,0,.6)"
      >
        <v-expand-transition
        >
          <div
            v-if="hover"
            class="transition-fast-in-fast-out teal darken-2 v-card--reveal white--text"
            style="height: 100%;"
          >
            <v-card-title>
              <span class="white--text">{{ award.competition }}</span>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="white--text">{{ award.result }} - {{ award.date }}</h4>
            </v-card-subtitle>
            <v-divider color="white"></v-divider>
            <v-card-text>
              <p class="white--text">
                {{ award.description }}
              </p>
            </v-card-text>
            
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ['award'],
  data() {
    return {}
  }
}
</script>

<style>

</style>