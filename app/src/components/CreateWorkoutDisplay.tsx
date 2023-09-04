import CreateWorkoutButton from './CreateWorkoutButton';
import Grid from '@mui/material/Grid';

type CreateWorkoutProps = {
	isDateMatching: boolean,
}

const CreateWorkoutDisplay = ( { isDateMatching }: CreateWorkoutProps ) => {
	return (
		<Grid container>	
			{ isDateMatching && <CreateWorkoutButton/> }
		</Grid>
	)
}

export default CreateWorkoutDisplay;
