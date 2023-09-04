import Base from './Base';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import WorkoutDisplay from '../components/WorkoutDisplay';
import CreateWorkoutDisplay from '../components/CreateWorkoutDisplay';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

const Workouts = () => {

	const [currentDate, setCurrentDate] = useState<Dayjs | null>(dayjs())

	const dateMatch = (date: Dayjs): boolean => {
		if (currentDate?.format('YYYY-MM-DD') !== date.format('YYYY-MM-DD')) {
			return false
		} 			
		return true
	}
			
	const mockWorkout = [
		{
			workoutDate: dayjs('2023-08-30'),
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
			workoutDate: dayjs('2023-08-28'),
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
				value={currentDate}
				onChange={(newDate) => setCurrentDate(newDate)}
				/>
			</Grid>
			<Stack
				sx={{
					minWidth: '60%',
				}}
			>
			{mockWorkout.map((exercise) =>
				<WorkoutDisplay isDateMatching={dateMatch(exercise.workoutDate)} exercise={exercise}/>
			)}
			<CreateWorkoutDisplay isDateMatching={dateMatch(dayjs())}/>
			</Stack>
		</Base>
	)
}

export default Workouts;
