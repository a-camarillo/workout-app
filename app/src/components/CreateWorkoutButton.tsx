import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CreateWorkoutButtonProps = {
	onClick: () => void,
}

const CreateWorkoutButton = (props: CreateWorkoutButtonProps) => {
	return (
		<Button variant='contained' onClick={props.onClick}>
			<Typography>
				Create a new workout
			</Typography>
		</Button>
	)
}

export default CreateWorkoutButton;
