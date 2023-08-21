import Exercise from '../components/Exercise';
import Box from '@mui/material/Box';
import Base from './Base';
import AddExercise from '../components/AddExercise';
import { useState } from 'react';

const Workouts = () => {
	const [listExercises, setListExercises] = useState([<Exercise></Exercise>])

	const handleAddExerciseClick = (): void => {
		setListExercises(listExercises.concat([<Exercise></Exercise>]))	
	}

	return (
		<Base>
			<Box>
				{ listExercises }
				<AddExercise clickFunction={handleAddExerciseClick}></AddExercise>
			</Box>
		</Base>
	)
}

export default Workouts;
