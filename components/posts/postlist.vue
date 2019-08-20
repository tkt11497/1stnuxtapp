<template>
<section class="post-list">
     <postpreview v-for="a in posty" v-bind:key="a.id" v-bind:isadmin="isAdmin" :id="a.id" :thumbnail="a.thumbnail"
      :title="a.title" :preview="a.preview"/>
</section>
</template>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import postpreview from '@/components/posts/postpreview';
export default {
    components:{
        postpreview
    },
    props:{
      isAdmin:{
        type: Boolean,
        default: false
      },
      posty:{
        type: Array,
        required: true
      }
    }
}
</script>