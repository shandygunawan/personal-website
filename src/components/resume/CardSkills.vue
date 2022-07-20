<template>
  <div>
    <v-row>
      <v-col class="col-6">
        <h1
          class="textHover"
          style="display: inline;"
        >{{ skill.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="col-6 col-sm-4 col-xl-2"
        v-for="subskill in skill.subskills"
        :key="subskill.name"
        data-aos="flip-down"
        data-aos-duration="500"
      >
        <v-card
          rounded
          hover
          color="#a8d0a4"
        >
          <v-card-text class="d-flex flex-column align-center">
            <v-img 
              :src="subskill.image" 
              :alt="skill.name" 
              max-height="150"
              contain 
              @click="openLinkNewTab(subskill.link)" 
              class="white--text align-end logoHover"
              style="cursor: pointer;"
            >
            </v-img>
          </v-card-text>
          <v-card-actions>
            <h2
              class="pa-2 textHover"
              style="cursor: pointer;"
              @click="openLinkNewTab(subskill.link)"
            >
              {{ subskill.name }}
            </h2>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  props: [ 'skill' ], //ex: skill: { title: "Preferred Languages", subskills: [ { name: "Python", image: require("<path>") } ] }
  data() {
    return {

    }
  },
  methods: {
    openLinkNewTab(link) {
      window.open(link);
    }
  }
}
</script>

<style scoped>

.textHover {
  --b: 0.1em;   /* the thickness of the line */
  --c: #367d7f; /* the color */
  
  color: #0000;
  padding-block: var(--b);
  background: 
    linear-gradient(var(--c) 50%,#000 0) 0% calc(100% - var(--_p,0%))/100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
}
.textHover:hover {
  --_p: 100%;
  --_s: .3s;
}

</style>