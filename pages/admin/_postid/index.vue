<template>
    <div class="admin-post-page">
        <section class="update-form">
            <adminPostForm v-bind:post="loadedposts" v-on:submit="updater" v-on:delete="deleter"/>
        </section>
    </div>
</template>
<script>
import adminPostForm from "@/components/admin/adminPostForm.vue";
import axios from 'axios'
export default {
    middleware:['checkauth','auth'],
    components:{
        adminPostForm
    },
asyncData(context) {
    return axios.get('https://nuxt-blog-51bcc.firebaseio.com/posts/'+context.route.params.postid+'.json')
    .then((res)=>{
      return {loadedposts:{...res.data,id:context.route.params.postid}}
    
    })
    .catch((e)=>{context.error(e);
    })

  },
  methods: {
      updater(data){
         this.$store.dispatch('update',data).then(
           (res)=>{this.$router.push('/')}
         )
      },
      deleter(data){
        this.$store.dispatch('delete',data).then(
          (res)=>{this.$router.push('/admin')
                  alert('successfully deleted')
                
                }
        )
      }
    
  },
}
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>