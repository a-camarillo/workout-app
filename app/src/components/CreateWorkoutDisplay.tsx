import CreateWorkoutButton from './CreateWorkoutButton';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import NewWorkout from '../components/NewWorkout';

type CreateWorkoutProps = {
	isDateMatching: boolean,
}

const CreateWorkoutDisplay = ( { isDateMatching }: CreateWorkoutProps ) => {

	const [isCreating, setIsCreating] = useState(false)

	const handleCreateNewWorkout = () => {
		setIsCreating(true)
	}

	return (
		<Grid container
			justifyContent='center'
			alignItems='center'
		>	
			{ (isDateMatching && !isCreating) && <CreateWorkoutButton onClick={handleCreateNewWorkout}/> }
			{ (isDateMatching && isCreating) && <NewWorkout /> }

		</Grid>
	)
}

export default CreateWorkoutDisplay;
