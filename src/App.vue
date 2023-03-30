<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Leah's Blog</a>
        <RouterLink v-if="showLink" to="/home" class="nav-link" style="color: darkgrey">Home</RouterLink>
        <RouterLink v-if="showLink" to="/admin/blog" class="nav-link" style="color: darkgrey">Blog Posts</RouterLink>
        <RouterLink v-if="showLink" to="/logout" class="nav-link" style="color: darkgrey">Logout</RouterLink>
        <RouterLink v-else to="/login" class="nav-link" style="color: darkgrey">Login</RouterLink>
      </div>
    </nav>

  </header>
  <RouterView />
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return localStorage.getItem("token") !== null;
    },
    showLink() {
      return this.loggedIn;
    }
  }
}
</script>
<style>
.navbar{
  padding-bottom: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

