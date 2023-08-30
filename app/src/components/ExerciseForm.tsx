import Set from './Set';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ExerciseLabel from './ExerciseLabel';
import AddRemove from './AddRemove';

// TODO: low prio
// work on transition from exercise label to input

const ExerciseForm = () => {	
	/*	Set Logic 
	 */
	
	const setObject = {
						unit: 'kg',
						sets: [{
						data: {
							reps: 0,
							weight: 0,
							},
						}]
					}


	const [listSets, setListSets] = useState(setObject.sets)
	const [unit, setUnit] = useState(setObject.unit)

	const handleAddSetClick = () => {
		setListSets(listSets.concat({data: {reps: 0, weight: 0,}}))
	}

	const handleRemoveSetClick = () => {
		setListSets(listSets.slice(0,-1))
	}

	const handleUnitChange = (event: SelectChangeEvent) => {
		event.stopPropagation()
		setUnit(event.target.value)
	}

	return (
		<Grid item 
		sx={{
			mx: 'auto',
			padding: '5px',
			width: '100%'
		}}>
			<Accordion
				sx={{
					'& .Mui-focusVisible': {
						backgroundColor: 'rgba(0,0,0,0)',
					},
				}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<ExerciseLabel />
				</AccordionSummary>
				<AccordionDetails>
					<Stack spacing={2}> 
						{listSets.map((set, index) =>
							<Set key={index} reps={set.data.reps} weight={set.data.weight} unit={unit} />
						)}
					</Stack>
					<AddRemove addHandler={handleAddSetClick} removeHandler={handleRemoveSetClick}/>
				</AccordionDetails>
			</Accordion>
		</Grid>
	)
}

export default ExerciseForm
