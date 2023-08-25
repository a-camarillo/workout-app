import Exercise from '../components/Exercise';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Base from './Base';
import AddRemove from '../components/AddRemove';
import { useState } from 'react';

const Workouts = () => {
	const [listExercises, setListExercises] = useState([{}])

	const handleAddExerciseClick = (): void => {
		setListExercises(listExercises.concat([{}]))	
	}
	
	const handleRemoveExerciseClick = (): void => {
		setListExercises(listExercises.slice(0,-1))	
	}

	return (
		<Base>
			<Stack>
				{ listExercises.map((exercise, index) => 
					<Exercise key={index} />
				)}
				<AddRemove addHandler={handleAddExerciseClick} removeHandler={handleRemoveExerciseClick}/>
			</Stack>
		</Base>
	)
}

export default Workouts;
