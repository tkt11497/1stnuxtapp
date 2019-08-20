<template>
  <div>
    <TheHeader v-on:sidenavToggle="displaysidenav=!displaysidenav"></TheHeader>
    <TheSidenav v-bind:show="displaysidenav" v-on:close="displaysidenav=false"></TheSidenav>
    <nuxt />
  </div>
</template>

<style>
html {
 font-family: 'Righteous', cursive;


}
body{
  margin: 0;
}
</style>
<script>
import TheHeader from '~/components/navigation/TheHeader.vue';
import TheSidenav from '~/components/navigation/TheSidenav.vue';

export default {
  data: function(){
    return {
      displaysidenav: false,
    }
  },
  components:{
    TheHeader,
    TheSidenav
  }
}
</script>