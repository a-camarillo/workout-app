import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const NavBar = () => {
	return (
			<AppBar
				sx={{
					backgroundColor: '#2E2E2D',
					padding: '1rem',
					margin: 'auto',
					marginTop: '0px',
					position: 'sticky',
				}}
			>
				<Grid
					container 
					spacing={1}
					justifyContent="left"
				>
					<Grid item>
						<Link href="/" variant='h5' underline='none' color='ivory'>HOME</Link>
					</Grid>
					<Grid item>
						<Link href="/workouts" variant='h5' underline='none' color='ivory'>WORKOUTS</Link>
					</Grid>
				</Grid>
			</AppBar>
	)
}

export default NavBar;
