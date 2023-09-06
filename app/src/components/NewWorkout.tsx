import ExerciseForm from '../components/ExerciseForm';
import Stack from '@mui/material/Stack';
import AddRemove from '../components/AddRemove';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const NewWorkout = () => {
	const [listExercises, setListExercises] = useState([{}])

	const handleAddExerciseClick = (): void => {
		setListExercises(listExercises.concat([{}]))	
	}
	
	const handleRemoveExerciseClick = (): void => {
		setListExercises(listExercises.slice(0,-1))	
	}

	return (
		<Grid item>
			<Stack
			sx={{
				marginTop: 0,
			}}
			>
				{ listExercises.map((_, index) => 
					<ExerciseForm key={index} />
				)}
				<AddRemove addHandler={handleAddExerciseClick} removeHandler={handleRemoveExerciseClick}/>
			</Stack>
		</Grid>
	)
}

export default NewWorkout;
