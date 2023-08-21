import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

interface clickHandler {
	clickFunction: () => void
}

const AddExercise = ({clickFunction}: clickHandler) => {
	return (
		<Box>
			<IconButton
			aria-label='addButton'
			onClick={clickFunction}
			>
			Add Exercise
				<AddIcon/>
			</IconButton>
		</Box>
	)
}

export default AddExercise;
