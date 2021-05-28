import axios from 'axios';

const url = 'http://localhost:5000/api/workouts/';

class Service {

	// Get Workouts
	static getWorkouts() {
		return new Promise(async (resolve, reject) => {
			try {
			const res = axios.get(url);
			const data = res.data;
			resolve(
				data.map(exercises => ({
				...exercises,
				createdAt: new Date(exercises.createdAt)
				}))
			);
	} catch(err) {
		reject(err);
	  }
	 })
	}
	// Create Workouts
	static insertWorkout(exercises) {
		return axios.post(url, {
			exercises
			//some payload data
		});	
	}

	// Delete Workouts
	static deleteWorkout(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default Service;
