<template>
  <div>
    <h2>{{ blog.title }}</h2>
    <img :src="blog.headerImage">
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
    <form @submit.prevent="addComment">
      <div>
        <label for="author">Name:</label>
        <input type="text" id="author" v-model="comment.author">
      </div>
      <div>
        <label for="content">Comment:</label>
        <textarea id="content" v-model="comment.content"></textarea>
      </div>
      <button type="submit">Add Comment</button>
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
    addComment() {
      axios.post(process.env.BACKEND_URL +'/blog' + this.$route.params.title, this.comment)
          .then(response => {
            this.blog = response.data
            this.comment = { author: '', content: '' }
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
