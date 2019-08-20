<template>
<div class="admin-page">
    <section class="new-post">
        <AppButton v-on:click="$router.push('/admin/new-post')">Create Post</AppButton>
        <AppButton v-on:click="logout">Logout</AppButton>
    </section>
    <section class="existing-posts">
        <h1>Existing Posts</h1>
        <postlist isAdmin v-bind:posty="loadedposts"/>
    </section>
</div>
</template>
<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
<script>
import postlist from "~/components/posts/postlist.vue"
import AppButton from "@/components/UI/AppButton.vue"
export default {
    middleware:['checkauth','auth'],
    components:{
        postlist,
        AppButton
    },
     computed:{
    loadedposts(){
      return this.$store.getters.loadedpost
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  },




}
</script>