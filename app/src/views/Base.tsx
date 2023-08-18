import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import NavBar from '../components/Navbar';

const Base = (props: { children: ReactNode }) => {
	return (
		<Grid
			container
			sx={{
				backgroundColor: '#8FD5A6',
				minHeight: '100vh',
			}}
		>
		<Grid container>
			<NavBar />
			{props.children}
		</Grid>
		</Grid>
	)
}

export default Base;

