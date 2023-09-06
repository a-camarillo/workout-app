import ExerciseDisplay from './ExerciseDisplay';
import Grid from '@mui/material/Grid';

type WorkoutDisplayProps = {
	isDateMatching: boolean,
	workout: any,
}

const WorkoutDisplay = ({isDateMatching, workout}: WorkoutDisplayProps) => {
	return (
		<Grid item>
			{ isDateMatching && workout.exercises.map((exercise: any) => 
				<ExerciseDisplay exercise={exercise}/>)}
		</Grid>		
	)
}

export default WorkoutDisplay;
