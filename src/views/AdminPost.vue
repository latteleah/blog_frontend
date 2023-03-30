<template>
  <div>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.content }}</p>
    <hr>
    <h3>Comments</h3>
    <ul>
      <li :v-for="comment in blog.comments">
        <p>{{ comment.author }} said:</p>
        <p>{{ comment.content }}</p>
      </li>
    </ul>
    <hr>
    <form :action="'/editPost/' + blog.title" method="POST">
      <input type="hidden" name="title" :value="blog.title">
      <button type="submit" class="btn btn-primary">Edit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      blog: {},
      comment: {
        author: '',
        content: ''
      }
    }
  },
  created() {
    axios.get(process.env.BACKEND_URL +'/blog' + this.$route.params.title)
        .then(response => {
          this.blog = response.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {

  }
}
</script>
