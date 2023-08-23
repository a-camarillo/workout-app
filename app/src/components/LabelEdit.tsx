import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { MouseEvent } from 'react';

type LabelEditProps = {
	isEditing: boolean;
	clickHandler: (event: MouseEvent) => void;
}

const LabelEdit = ({
		isEditing,
		clickHandler
	}: LabelEditProps) => {
		
	if (isEditing) {
		return (
			<IconButton
			aria-label='edit'
			onClick={clickHandler}
			>
				<CheckCircle />
			</IconButton>
		)
	}
	return (
		<IconButton 
		aria-label='edit'
		onClick={clickHandler}
		>
			<EditIcon />
		</IconButton>
	);
}

export default LabelEdit;
