import axios from 'axios';

const url = 'api/workouts/';

class Service {

	// Get Workouts
	static getWorkouts() {
		return axios.get(url)
					.then(res => res.data)
					// .catch(err)
	 	}

	// Create Workouts
	static insertWorkout(exercises) {
		return axios.post(url, {
			exercises
		});	
	}

	// Delete Workouts
	static deleteWorkout(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default Service;
