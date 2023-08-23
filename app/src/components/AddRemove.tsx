import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { MouseEvent } from 'react';

type AddRemoveProps = {
	addHandler: (event: MouseEvent) => void;
	removeHandler: (event: MouseEvent) => void;
}

const AddRemove = ({ addHandler, removeHandler }: AddRemoveProps) => {
	return (
		<Grid container justifyContent='center'>
			<IconButton
			aria-label='addSet'
			onClick={addHandler}
			>
				<AddIcon htmlColor='white'/>	
			</IconButton>
			<IconButton
			aria-label='removeSet'
			onClick={removeHandler}
			>
				<RemoveIcon htmlColor='white'/>	
			</IconButton>	
		</Grid>
	)
}

export default AddRemove;
