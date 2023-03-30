<template>
  <h1>Logging out page</h1>
</template>


<script>
export default{
  name : 'LogoutComponent',
  mounted() {
    localStorage.removeItem('token');
    this.$router.push('/login');
  }
  }
</script>