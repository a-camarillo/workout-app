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
import EditIcon from '@mui/icons-material/Edit';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { ChangeEvent, MouseEvent, useState } from 'react';


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

	return (
	<Box 
	sx={{
		mx: 'auto',
		padding: 20,
		maxWidth: '60ch',
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
			</AccordionSummary>
			<AccordionDetails>
				<Stack spacing={2}> 
					<Set></Set>
					<Set></Set>
					<Set></Set>
				</Stack>			
			</AccordionDetails>
		</Accordion>
	</Box>
	)
}

export default Exercise
