<template>
    <div id="set" v-for="(set, setCounter) in sets" v-bind:key="setCounter">
        <p>Set {{ setCounter+1 }}</p>
        <label>Weight:</label>
        <input type="number" id="weight" v-model="set.weight">
        <label>Reps:</label>
        <input type="number" id="reps" v-model="set.reps">
    </div>
    <button @click="addSet">Add Set</button>
    <button @click="removeSet">Remove Set</button>
</template>

<script>

export default {
    data() {
        return {
            sets: [
                {
                    weight: 0,
                    reps: 0
                }
            ]
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
        this.sets.splice(setCounter,1);
    }
  }
}

</script>
