<template>
     <nuxt-link v-bind:to="postLink" class="post-preview">
     <article>
       <div class="post-thumbnail" v-bind:style="{backgroundImage : 'url('+thumbnail+')'}"></div>
       <div class="post-content"></div>
       <h1>{{title}}</h1>
       <p>{{preview}}</p>
     </article>
     </nuxt-link>
</template>
<script>
export default {
    name: 'postpreview',
    computed: {
      postLink: function(){
        return this.isadmin 
        
        ? '/admin/'+ this.id :'posts/'+this.id
      }
    },
    props:{
        id :{
            type: String,
            required: true
        },
        isadmin:{
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        preview:{
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        }


    }
}

</script>
<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>