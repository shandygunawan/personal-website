<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

html{
  overflow-y: auto;
  
}

@font-face {
  font-family: "Comfortaa";
  src: url('./assets/fonts/Comfortaa-Regular.ttf');
}

@font-face {
  font-family: "FabrikatNormalThin";
  src: url('./assets/fonts/FabrikatNormal-Thin.ttf');
}

</style>
