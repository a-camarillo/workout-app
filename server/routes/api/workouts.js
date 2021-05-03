const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const router = express.Router();

// Get Workouts
router.get('/', async (req, res) => {
	const workouts = await loadWorkoutsCollection();
	res.send(await workouts.find({}).toArray());
});

// Post Workout
router.post('/', async (req, res) => {
	const workouts = await loadWorkoutsCollection();
	await workouts.inserOne({});
	res.status(201).send();
});

// Delete Workout
router.delete('/:id', async (req, res) => {
	const workouts = await loadWorkoutsCollection();
	await workouts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
	res.status(200).send();
});

async function loadWorkoutsCollection() {
	await client.connect();
	return client.db('workouts').collection('workouts');
};

module.exports = router;
