<template>
  <form>
    <div id="exercise" v-for="exercise in exercises" v-bind:key="exercise">
      <label>Exercise: </label>
      <input type="text" id="exerciseName" @keyup="enterExercise" required>
      <p hidden id="exerciseText">Exercise: {{ exercises.exercise }}</p>
      <Set/>
    </div>
    <button @click="addExercise">Add Exercise</button>
    <button @click="removeExercise">Remove Exercise</button>
  </form>
</template>

<script>
import Set from './Set.vue'

export default {
    components: { Set },
    methods: {
      addExercise() {
        this.exercises.push({
          exercise: ''
        });
      },
      removeExercise() {
        this.exercises.pop();
      },
      enterExercise(e) {
        if (e.keyCode == 9) {
          const p = document.getElementById('exerciseText');

          p.removeAttribute("hidden");
        }
      }
    },
    data() {
      return {
        exercises: [
         {
            exercise: ''
         }
        ]
      }
    }
}
</script>