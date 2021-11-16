<template>
  <div>
    <div class="heading">
      <router-link to="/"><h1>Workout App</h1></router-link>
    </div>
  </div>
  <router-view/>
</template>


<script>
import Exercise from './components/Exercise'

export default {
  name: 'App',
  components: { Exercise }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.heading {
  position: sticky;
  width: 100%;
  padding: 5px 0 5px;
  top: 0;
  color: white;
  background: #82868c;
  text-align: left; 
}

body {
  background-color: #82b4ff;
  margin: 0;
}

#nav {
  padding: 30px;
}


a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration:underline;
}

a:visited {
  text-decoration: none;
}

.heading a, .heading a:visited {
  color: white;
}
</style>
