import Set from './Set';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


// TODO: low prio
// work on transition from exercise label to input

const Exercise = () => {
	const [exerciseLabel, setExerciseLabel] = useState('Exercise');
	const [exerciseLabelVisibility, setExerciseLabelVisibility] = useState('inline')
	const [exerciseInputVisibility, setExerciseInputVisibility] = useState('none')
	const [editIconVisibility, setEditIconVisibility] = useState('inline')
	const [confirmIconVisibility, setConfirmIconVisibility] = useState('none')
		
	const handleEditClick = (click: MouseEvent) => {
		click.stopPropagation();
		setExerciseLabelVisibility('none')
		setExerciseInputVisibility('inline')
		setEditIconVisibility('none')
		setConfirmIconVisibility('inline')
	}

	const handleLabelChange = (input: ChangeEvent<HTMLInputElement>) => {
		setExerciseLabel(input.target.value)
	}

	const handleConfirmationClick = (click: MouseEvent) => {
		click.stopPropagation();
		setExerciseInputVisibility('none')
		setExerciseLabelVisibility('inline')
		setEditIconVisibility('inline')
		setConfirmIconVisibility('none')
	}
	
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
	<Box 
	sx={{
		mx: 'auto',
		padding: '5px',
		minWidth: '60ch',
	}}>
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
			>
				<Input 
				sx={{
					display: exerciseInputVisibility
				}}
				onClick={(e) => e.stopPropagation()}
				onChange={handleLabelChange}
				/>
				<Typography 
				variant='h5'
				sx={{
					display: exerciseLabelVisibility
				}}
				>
					{exerciseLabel}
				</Typography>
					<IconButton 
					aria-label='edit'
					onClick={(e) => handleEditClick(e)}
					sx={{
						display: editIconVisibility
					}}>

						<EditIcon />
					</IconButton>
					<IconButton
					aria-label='edit'
					onClick={(e) => handleConfirmationClick(e)}
					sx={{
						display: confirmIconVisibility
					}}>
						<CheckCircle />
					</IconButton>
					<Select
					aria-label='unit'
					value={unit}
					onChange={handleUnitChange}
					>
						<MenuItem value='kg'>kg</MenuItem>
						<MenuItem value='lb'>lb</MenuItem>
					</Select>
			</AccordionSummary>
			<AccordionDetails>
				<Stack spacing={2}> 
					{listSets.map((set, index) =>
						<Set key={index} reps={set.data.reps} weight={set.data.weight} unit={unit} />
					)}
				</Stack>	
				<IconButton
				aria-label='addSet'
				onClick={handleAddSetClick}
				>
					<AddIcon/>	
				</IconButton>
				<IconButton
				aria-label='removeSet'
				onClick={handleRemoveSetClick}
				>
					<RemoveIcon/>	
				</IconButton>
			</AccordionDetails>
		</Accordion>
	</Box>
	)
}

export default Exercise
