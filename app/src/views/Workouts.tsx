import Base from './Base';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ExerciseDisplay from '../components/ExerciseDisplay';

const Workouts = () => {
	
	const mockWorkout = [
		{
			title: 'Bench Press',
			sets: [
				{
					reps: 10,
					weight: 100,
				},
				{
					reps: 8,
					weight: 135,
				},
			]
		},
		{
			title: 'Squat',
			sets: [
				{
					reps: 10,
					weight: 100,
				},
				{
					reps: 8,
					weight: 135,
				},
			]
		},
	]
	
	return (
		<Base>
			<Grid container>
				<DateCalendar
				disableFuture
				/>
			</Grid>
			<Stack
				sx={{
					minWidth: '60%',
				}}
			>
			{mockWorkout.map((exercise) =>
			<Grid item
				sx={{
					marginTop: '10px',
			}}>
				<ExerciseDisplay exercise={exercise}/>
			</Grid>
			)}
			</Stack>
		</Base>
	)
}

export default Workouts;
