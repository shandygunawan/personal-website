<template>
  <v-card
    elevation="0"
  >
    <v-card-title>
      <h3 class="word-warp: break-word;">{{ skill.title }}</h3>
      
    </v-card-title>
    <v-card-text>
      <v-row
        v-for="subskill in skill.subskills"
        :key="subskill.name"
        class="d-flex justify-center align-center"
      >
        <v-col class="col-4 col-md-2">
          <h3>{{ subskill.name }}</h3>
        </v-col>
        <v-col class="col-6">
          <v-progress-linear 
            :value="subskill.value"
            height="20"
            data-aos="fade-right"
            data-aos-mirror="true"
            :color="skill.color"
          >
            <template v-slot:default="{ value }">
              <strong class="white--text">{{ getSkillLevel(value) }}</strong>
            </template>
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  props: [ 'skill' ], //ex: skill: { title: "Preferred Languages", subskills: [ { name: "Python", value: 100 } ] }
  data() {
    return {

    }
  },
  methods: {
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
    }
  }
}
</script>

<style>

</style>