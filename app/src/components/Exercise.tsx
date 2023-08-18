import Set from './Set';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { MouseEvent } from 'react';

// TODO
// add functionality for editing exercise title in typography component

const handleEditClick = (e: MouseEvent) => {
	e.stopPropagation();
}

const Exercise = () => {
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
				<Typography variant='h5'>
					Exercise:
					<IconButton aria-label='edit' onClick={(e) => handleEditClick(e)}>
						<EditIcon />
					</IconButton>
				</Typography>
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
