<template>
  <div class="home-page">
   <section class="intro">
     <h1>Get the CELE NEWS</h1>
   </section>
 <postlist :posty="loadedposts"/>
  </div>
</template>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url('~assets/images/main-page-background.jpg');
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>


<script>
import Logo from '~/components/Logo.vue'
import postlist from '@/components/posts/postlist'
import axios from 'axios'
export default {
  middleware:'log',

  components: {
    Logo,
    postlist
  },
  asyncData(context) {
    console.log("data is loaded")
   
    },
  head:{
    title:'My 1st Nuxt app'
  },
  created() {
    
  },
  //  fetch(context) {
  //        return axios.get("https://nuxt-blog-51bcc.firebaseio.com/posts.json")
  //                   .then((res) => {
  //                       const postarray = []
  //                       for (const key in res.data) {
  //                           postarray.push({...res.data[key], id: key })
  //                       }
  //                       context.store.commit('setpost', postarray)
  //                   })
  //                   .catch((e) => { context.error(e) })
        
  //   },
  computed:{
    loadedposts(){
      return this.$store.getters.loadedpost
    }
  }
  // data : function(){
  //   return {
      
  //   }
  // }
}
</script>