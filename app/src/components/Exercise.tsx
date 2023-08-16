import Set from './Set';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Exercise = () => {
	return (
	<Box 
	sx={{
		mx: 'auto',
		padding: 20,
		maxWidth: '60ch',
	}}>
	<Typography variant='h5'>
		Exercise:
		<Stack spacing={2}> 
			<Set></Set>
			<Set></Set>
			<Set></Set>
		</Stack>	
	</Typography>
	</Box>
	)
}

export default Exercise
