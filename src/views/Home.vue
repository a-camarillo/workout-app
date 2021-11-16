<template>
<div class="home">
    <h1>Workout App</h1>
    <h2>An application for tracking weightlifting progress</h2>
    <div class="route">
        <router-link to="/workouts"><h3>View Workouts</h3></router-link>
        <router-link to="/new-workout"><h3>Create New Workout</h3></router-link>
    </div>
    <div class="media-buttons">
        <a href="https://github.com/a-camarillo"><img src="../assets/github-logo.png" height="60" width="60"></a>
        <a href="https://linkedin.com/in/anthony-camarillo/"><img src="../assets/linkedin-logo.png" height="60" width="60"></a>                                                               
    </div>
</div>
</template>

<script>
import Exercise from '../components/Exercise'

export default {
    name: 'Home',
    components: { Exercise },
}
</script>

<style>

    .home h1 {
        font-size: 60px;
        margin: 10px;
    }

    .home h2 {
        font-size: 40px;
    }

    .route {
        margin: 30px;
    }
    .route h3 {
        font-size: 25px;
        justify-content: center;
        align-items: center;
        color: #2c3e50;
        display: inline;
        margin: .5em;
    }

    .media-buttons {
        top: 90%;
        margin: .5em;
        align-items: center;
        justify-content: center;
    }

    .media-buttons a {
        margin: 1em;
    }
</style>