<template>
  <div>
    <h2>{{ blog.title }}</h2>
    <img :src="blog.headerImage">
    <form>
      <label for="content">Content</label>
      <textarea id="content" v-model="blog.content"></textarea>
      <br>
      <label for="image">Image</label>
      <textarea id="image" v-model="blog.headerImage"></textarea>
      <br>
    </form>
    <hr>
    <h3>Comments</h3>
    <ul>
    </ul>
    <hr>
    <router-link to="/admin/blog/{{blog.title}}">
      <v-btn color="#f7bedb" class="mr-4" @click="updateToAPI">
        Submit
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      blog: {
        title: this.$route.params.title,
        headerImage: '',
        date: '',
        content: '',
      }
    }
  },
  mounted() {
    axios.get(process.env.BACKEND_URL +'/admin/blog/' + this.$route.params.title)
        .then(response => {
          this.blog = response.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {
    updateToAPI() {
      axios.post(process.env.BACKEND_URL + '/admin/blog/' + this.blog.title, this.blog)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>