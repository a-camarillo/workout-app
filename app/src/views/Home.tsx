import Box from '@mui/material/Box';
import Base from './Base';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
	return (
		<Base>
			<Box>
				<Button href='new-workout' variant='outlined'>
					<Typography>
						Create a new workout
					</Typography>
				</Button>
			</Box>
		</Base>	
	)
}

export default Home;
