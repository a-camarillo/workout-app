<template>
<div id="set">
    <div v-for="(set, setCounter) in sets" :key="setCounter">
        <p>Set {{ setCounter+1 }}</p>
        <label>Weight:</label>
        <input type="number" id="weight" v-model="set.weight" min=0 max=1000>
        <label>Reps:</label>
        <input type="number" id="reps" v-model="set.reps" min=0 max=100>
    </div>
    <button id="setButton" @click="addSet">Add Set</button>
    <button id="setButton" @click="removeSet">Remove Set</button>
</div>
</template>
<script>
export default {
    props: {
        sets: {
            type: Array,
            default: [],
            required: false,
        }
    },
    methods: {
    addSet() {
        this.sets.push({
            weight: 0,
            reps: 0
        });
    },
    removeSet(setCounter) {
        this.sets.pop();
    }
  }
}
</script>
<style>
    * {
        font-family: fantasy;
    }
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
    }   

    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }
    label {
        padding: 1em;
    }
    #setButton {
        margin: .5em 0 .5em .5em;
    }
    #set {
        margin: auto;
    }
</style>