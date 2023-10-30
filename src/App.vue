<template>

  <SideBar/>
  <NavBar/>

  <router-view/>
</template>
<script>
import SideBar from '@/components/Side-Bar.vue';
import NavBar from '@/components/Nbar.vue';

export default {
  components: {
    SideBar,
    NavBar
  }
}
</script>

<link href='https://fonts.googleapis.com/css?family=Irish Grover' rel='stylesheet'>
<style>
#app {
  font-family: 'Irish Grover';
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
