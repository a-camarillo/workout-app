<template>
<div>
    <div id="workout" :key="workout._id" v-for="workout in workouts">
        <h2>Workout: {{ new Date(workout.createdAt).getMonth() }}/{{ new Date(workout.createdAt).getDay() }}/{{ new Date(workout.createdAt).getFullYear() }} - {{ new Date(workout.createdAt).getHours() }}:{{ new Date(workout.createdAt).getMinutes() }}:{{ new Date(workout.createdAt).getSeconds() }}</h2>
        <button @click="isModalOpen=!isModalOpen">x</button>
            <div :class="{hidden: !isModalOpen}">
                <div class="overlay">
                    <div class="modal">
                        <p>Are you sure you want to remove this workout?</p>
                        <button @click="removeWorkout(workout._id); isModalOpen=!isModalOpen;">Yes</button>
                        <button @click="isModalOpen=!isModalOpen;">No</button>
                    </div>
                </div>
            </div>
        <div :key="exercise.id" v-for="exercise in workout.workout">
            <h3>Exercise: {{ exercise.name }}</h3>
            <h4>Focus: {{ exercise.type }}</h4>
            <div :key="set" v-for="set in exercise.sets">
                <p>Weight: {{ set.weight }} - Reps: {{ set.reps }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Service from '../Service.js'

export default {
    data() {
        return {
            workouts: [],
            error: '',
            isModalOpen: false,
        };
    },
    mounted() {
        this.getWorkouts();
    },
    methods:{
        async getWorkouts() {
            try {
                this.workouts = await Service.getWorkouts();
            } catch(err) {
                this.error = err.message;
                console.log(this.error);
            }
        },
        async removeWorkout(id) {
            try {
                this.workouts = this.workouts.filter(workout => {
                    return workout._id !== id 
                })
                await Service.deleteWorkout(id);
            }
            catch(err) {
                this.error = err.message;
                console.log(this.error)
            }
        },
        showModal() {

        },
    }
}
</script>

<style>

#workout {
    border-style: solid;
}
.hidden {
  display: none;
}

.modal {
    width: 500px;
    margin: 0px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px 3px;
    font-family: Helvetica, Arial, sans-serif;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000094;
    z-index: 999;
}

</style>