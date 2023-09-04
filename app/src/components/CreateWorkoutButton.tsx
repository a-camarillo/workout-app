import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CreateWorkoutButton = () => {
	return (
		<Button href='new-workout' variant='outlined'>
			<Typography>
				Create a new workout
			</Typography>
		</Button>
	)
}

export default CreateWorkoutButton;
