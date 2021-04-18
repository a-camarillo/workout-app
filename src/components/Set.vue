<template>
    <div id="set" v-for="(set, setCounter) in sets" :key="setCounter">
        <p>Set {{ setCounter+1 }}</p>
        <label>Weight:</label>
        <input type="number" id="weight" v-model="set.weight" min=0 max=1000>
        <label>Reps:</label>
        <input type="number" id="reps" v-model="set.reps" min=0 max=100>
    </div>
    <button @click="addSet">Add Set</button>
    <button @click="removeSet">Remove Set</button>
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
    // data() {
    //     return {
    //         sets: [
    //             {
    //                 weight: 0,
    //                 reps: 0
    //             }
    //         ]
    //     }
    // },
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
