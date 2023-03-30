<template>
  <div class="posts">

    <!--    body-->
    <div class="container-card">
      <div class="card-box">
        <v-row>
          <v-col cols="12" v-for="post in posts" v-bind:key="post.title" class="d-flex">
            <router-link :to="{ path: '/blog/' + post.title }">
              <v-col cols="2">{{post.date}}</v-col>
                <v-col cols="10">
                  <v-card class="elevation-5 flex d-flex flex-column"
                          max-width="374" >
                    <v-card-title class="flex-grow-1">{{post.title}} </v-card-title>
                    <v-img
                        :src="post.headerImage"  @error="imageUrl='https://assets-eu-01.kc-usercontent.com/ef047d08-1d58-0178-15c7-078db6e22a46/cf183512-ceef-4ffb-8440-41c7841d6890/trinity_keyvisual_0002000.jpg'"
                        class="white--text align-end"
                        height="250"
                        width="250"
                    ></v-img>
                    <v-card-subtitle class="flex-grow-1">Posted at :{{post.date}}</v-card-subtitle>
                    <v-card-subtitle class="flex-grow-1" style="max-height: 4.5em; overflow: hidden; text-overflow: ellipsis">{{post.content}}</v-card-subtitle>
                    <v-card-actions>

                    </v-card-actions>
                  </v-card>
                </v-col>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      Posts : [],
      title: ''
    }
  },
  mounted() {
    axios.get(process.env.BACKEND_URL+'/viewPosts')
        .then((response)=>{
          console.log(response.data)
          this.Posts = response.data
        })
        .catch((error)=>{
          console.log(error)
          if(error.response.status === 401){
            window.alert("You are not logged in.")
            this.$router.push('/login')
          }
        })
  },
  computed :{
  },
  methods:{
  }
}
</script>

<style>
.users {
  min-height: 100vh;
  padding-top: 30px;
  display: block;
  align-items: center;
}
.container-search {  display: grid;
  grid-template-columns: 0.2fr 3.4fr 0.2fr 0.2fr;
  grid-template-rows: 0.2fr 2.6fr 0.2fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . ."
    ". search-bar add-button ."
    ". . . .";
}

.search-bar { grid-area: search-bar; }

.add-button { grid-area: add-button; }


.container-card {  display: grid;
  grid-template-columns: 0.2fr 2.6fr 0.2fr;
  grid-template-rows: 0.2fr 2.6fr 0.2fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". card-box ."
    ". . .";
}

.card-box { grid-area: card-box; }

.card-group {
  padding: 2rem;
}
</style>

