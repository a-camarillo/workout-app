import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ExerciseDisplayProps = {
	exercise: {
		title: string,
		sets: Array<{reps: number, weight: number}>,
	},
}

const ExerciseDisplay = ({ exercise }: ExerciseDisplayProps) => {
	return (
		<Accordion sx={{ marginTop:0 }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
			>
				<Typography variant='subtitle1'>
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
	)
}

export default ExerciseDisplay;
