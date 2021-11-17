<template>
  <div>
    <div class="heading">
      <router-link to="/"><h1>Workout App</h1></router-link>
      <router-link to="/workouts"><h3>View Workouts</h3></router-link>
      <router-link to="/new-workout"><h3>Create New Workout</h3></router-link> 
    </div>
  <router-view/>
  </div>
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
  width: auto;
  padding: 5px 0 5px 5px;
  top: 0;
  color: white;
  background: #82868c;
  text-align: left;
  z-index: 1; 
}

.heading h1 {
  font-size: 50px;
  display: inline;
  padding: 5px 10px 5px 5px;
}

.heading h3 {
  justify-content: center;
  align-content: center;
  display: inline;
  padding: 5px 10px 5px 5px;
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
