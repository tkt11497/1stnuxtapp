<template>

<div class="single-post-page">
    <section class="post">
        <h1 class="post-title">{{loadedposts.title +' '+ this.$route.params.id}} </h1>
        <div class="post-details">
            <div class="post-details">Last updated on {{loadedposts.date}}</div>
            <div class="post-details"> posted by {{loadedposts.author}}</div>
        </div>
        <p class="post-content">{{loadedposts.content}}</p>
        <img :src="loadedposts.thumbnail" class="center"/>
    </section>
    <section class="post-feedback">

        <p>let me know blah blah<a href="#">idiot@mail.com</a></p>
    </section>
</div>

</template>
<script>
import axios from 'axios'
export default {
  
  asyncData(context) {
    return axios.get('https://nuxt-blog-51bcc.firebaseio.com/posts/'+context.route.params.id+'.json')
    .then((res)=>{
      return {loadedposts:res.data}
      console.log(loadedposts)
    })
    .catch((e)=>{context.error(e);
    })

  },
}



</script>
<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>