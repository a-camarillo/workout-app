import Base from './Base';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

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
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
					>
						<Typography>
							{exercise.title}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Table> 
								<TableHead>
											<TableRow>
												<TableCell>Reps</TableCell>
												<TableCell>Weight</TableCell>
											</TableRow>
								</TableHead>
								<TableBody>
											{ exercise.sets.map((set) =>
												<TableRow>
													<TableCell>{set.reps}</TableCell>
													<TableCell>{set.weight}</TableCell>
												</TableRow>
											)}
								</TableBody>
						</Table>
					</AccordionDetails>
				</Accordion>
			</Grid>
			)}
			</Stack>
		</Base>
	)
}

export default Workouts;
