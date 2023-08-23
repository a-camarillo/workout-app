import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import NavBar from '../components/Navbar';

const Base = (props: { children: ReactNode }) => {
	return (
		<Grid
			container
			sx={{
				backgroundColor: '#1F1B24',
				minHeight: '100vh',
			}}
		>
			<Grid container>
				<Grid container>
					<NavBar />
					<Grid container sx={{justifyContent: 'center'}}>
						{props.children}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Base;

