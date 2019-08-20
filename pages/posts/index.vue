<template>
    <div class="posts-page">
      <postlist v-bind:posty="loadedposts"/>
    </div>
</template>
<script>
import postlist from '@/components/posts/postlist.vue';
import axios from 'axios'
export default {
    components:{
        postlist
    },
    // fetch(context) {
    //      return axios.get("https://nuxt-blog-51bcc.firebaseio.com/posts.json")
    //                 .then((res) => {
    //                     const postarray = []
    //                     for (const key in res.data) {
    //                         postarray.push({...res.data[key], id: key })
    //                     }
    //                     context.store.commit('setpost', postarray)
    //                 })
    //                 .catch((e) => { context.error(e) })
        
    // },
    computed: {
        loadedposts(){
            return this.$store.getters.loadedpost
        }
    },
}
</script>
<style scoped>
.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>