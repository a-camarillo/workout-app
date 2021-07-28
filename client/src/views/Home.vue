<template>
<div>
    <h1>Workout App</h1>
    <h3>An application for tracking weightlifting progress</h3>
    <router-link class="route" to="/new-workout">Create New Workout</router-link>
    <router-link class="route" to="/workouts">View Workouts</router-link>
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
    .route {
        align-items: center;
        justify-content: center;
        margin: .5em;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>