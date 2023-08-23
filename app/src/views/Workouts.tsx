import Exercise from '../components/Exercise';
import Box from '@mui/material/Box';
import Base from './Base';
import AddExercise from '../components/AddExercise';
import { useState } from 'react';

const Workouts = () => {
	const [listExercises, setListExercises] = useState([{}])

	const handleAddExerciseClick = (): void => {
		setListExercises(listExercises.concat([{}]))	
	}

	return (
		<Base>
			<Box>
				{ listExercises.map((exercise, index) => 
					<Exercise key={index} />
				)}
				<AddExercise clickFunction={handleAddExerciseClick}></AddExercise>
			</Box>
		</Base>
	)
}

export default Workouts;
