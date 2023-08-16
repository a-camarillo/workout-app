import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Home() {
	return (
		<AppBar>
			<Typography variant="h3" component="div">
				Workout Tracker
			</Typography>
			<Typography variant="h4" component="div">
				Workouts 
			</Typography>
		</AppBar>
	)
}

export default Home;
