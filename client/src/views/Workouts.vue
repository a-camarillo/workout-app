<template>
    <h1>Workouts</h1>
    <p>{{ workouts }}</p>
    <!-- <div :key="workout._id" v-for="workout in workouts">
        <h2>{{ workout._id }}</h2>
        <h3>{{ workout.workout }}</h3>
    </div> -->
</template>

<script>
import Service from '../Service.js'

export default {
    data() {
        return {
            workouts: [],
            error: ''
            }
        },
    async getWorkouts() {
        try {
                this.workouts = await Service.getWorkouts();
                console.log(this.workouts);
        } catch(err) {
                this.error = err.message;
                console.log(this.error);
        }
    }
}
</script>