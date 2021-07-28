<template>
  <div>
    <div id="exercise">
        <label>Exercise: </label>
        <input type="text" id="exerciseName" required v-model="newExercise.name" />
        <label>Focus: </label>
        <input id="exerciseType" required v-model="newExercise.type" /><br>
        <button id="addExerciseButton" @click="addExercise">Add Exercise</button>
    </div>
    <div :key="`exercise-${exercise.id}`" v-for="exercise in exercises" :ref="`exerciseDiv-${exercise.id}`">
    <hr/>
    <div :class="{hidden: !exercise.isExerciseInEdit}">
        <label >Exercise: </label>
        <input type="text" id="exerciseName" required v-model ="exercise.name" />
        <label >Focus: </label>
        <input id="exerciseType" required v-model="exercise.type"/>
    </div>
      <h2>{{exercise.name}}</h2>
      <h4>{{exercise.type}}</h4>
      <Set v-model:sets="exercise.sets"/><br>
      <button @click="removeExercise(exercise.id)">Remove</button>
      <button id="editButton" @click="editExercise(exercise.id)">Edit</button>
    </div>
	<button @click="saveWorkout">Save Workout</button>
  </div>
</template>

<script>
import Set from './Set.vue'
import Service from '../Service.js'

export default {
    components: { Set },
    methods: {
      removeExercise(exerciseId) {
        // find exercise in this.exercises that exercise.id matches exerciseId
        // most popular array methods .map, .forEach. .filter, .reduce
        this.exercises = this.exercises.filter(exercise => {
          return exercise.id !== exerciseId
        });
      },
      generateId() {
        // creates a base36 string from a randomized decimal
        const BASE = 36;
        const SUBSTRING = 2;
        return '_' + Math.random().toString(BASE).substr(SUBSTRING)
      },
      addExercise() {
        this.newExercise.id = this.generateId()
        this.exercises.push(this.newExercise)
        this.newExercise = {
          name: '',
          id: '',
          type: '',
          sets: []
        }
      },
      editExercise(exerciseId) {
        const exerciseInEdit = this.exercises.find(exercise => {
           return exercise.id == exerciseId
        });
        exerciseInEdit.isExerciseInEdit = !exerciseInEdit.isExerciseInEdit
        if (exerciseInEdit.isExerciseInEdit == true) {
          this.$refs[`exerciseDiv-${exerciseId}`].children.editButton.innerText = "Save"
        } else {
          this.$refs[`exerciseDiv-${exerciseId}`].children.editButton.innerText = "Edit"
        }
      },
      async saveWorkout() {
	      try {
          await Service.insertWorkout(this.exercises);
	      } catch(err) {
          console.log(err.message)
          }
        }
    },
    data() {
      return {
        newExercise: {
          name: '',
          id: '',
          type: '',
          sets: [],
          isExerciseInEdit: false,
        },
        exercises: [
          /**
           * exercise
           * {
           *   name: String,
           *   id: String,
           *   type: String,
           *   sets: Array,
           *   isExerciseInEdit: Boolean
           * }
           **/ 
        ],
      }
    }
}
</script>

<style>
h2 {
  font-size: 1.5rem;
  margin: .25em 0 .25em 0;
}
h4 {
  font-size: 1.25rem;
  margin: .25em 0 .25em 0;
}
.hidden label, .hidden input {
  display: none;
}
#addExerciseButton {
  margin: 1em 0 1em 0;
}
</style>
