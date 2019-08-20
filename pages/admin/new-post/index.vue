<template>
    <div class="admin-new-post-page">
      <section class="new-post-form">
<adminPostForm v-on:submit="insertdata" v-on:delete="ndelete"/>
      </section>
    </div>
</template>
<script>
import adminPostForm from '@/components/admin/adminPostForm';
import axios from 'axios'
export default {
    middleware:['checkauth','auth'],
    components:{
        adminPostForm

    },
    methods: {
        insertdata(data){
        this.$store.dispatch('addpost',data)
        .then(this.$router.push('/admin/'))
        // axios.post('https://nuxt-blog-51bcc.firebaseio.com/posts.json', data).then(
        //             (result) => {
        //                 this.$store.commit('addpost', {...data, id: result.data.name })
        //                 this.$router.push('/admin/')
        //             }
        //         ).catch((err) => console.log(err))
            },
        ndelete(){
          alert('Nothing to delete')
        }
      
      }
 
}
</script>
<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>