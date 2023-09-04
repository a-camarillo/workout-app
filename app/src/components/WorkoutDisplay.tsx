import ExerciseDisplay from './ExerciseDisplay';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type WorkoutDisplayProps = {
	isDateMatching: boolean,
	exercise: any,
}

const WorkoutDisplay = ({isDateMatching, exercise}: WorkoutDisplayProps) => {
	return (
		<Grid item
			sx={{
				marginTop: '10px',
		}}>
			{ isDateMatching && <ExerciseDisplay exercise={exercise}/> }
		</Grid>		
	)
}

export default WorkoutDisplay
