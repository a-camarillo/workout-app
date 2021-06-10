<template>
  <div>
  <router-link to="/new-workout">Create Workout</router-link>
  <router-link to="/workouts">View Workouts</router-link>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
