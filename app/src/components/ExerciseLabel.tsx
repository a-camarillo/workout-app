import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LabelEdit from './LabelEdit';
import { ChangeEvent, MouseEvent, useState } from 'react';

const ExerciseLabel = () => {
	
	const [exerciseLabel, setExerciseLabel] = useState('Exercise')	
	const [edit, setEdit] = useState(false)

	const handleLabelChange = (input: ChangeEvent<HTMLInputElement>) => {
		setExerciseLabel(input.target.value)
	}
	
	const handleLabelEdit = (click: MouseEvent) => {
		click.stopPropagation()
		setEdit(!edit)
	}


	if (!edit) {
	return (
		<Grid item>
			<Typography 
			variant='h5'
			>
				{exerciseLabel}
			</Typography>
			<LabelEdit isEditing={edit} clickHandler={handleLabelEdit} />
		</Grid>
		)
	}
	return (
		<Grid item>
			<Input 
			onClick={(e) => e.stopPropagation()}
			onChange={handleLabelChange}
			/>
			<LabelEdit isEditing={edit} clickHandler={handleLabelEdit} />
		</Grid>
	)
}

export default ExerciseLabel;
