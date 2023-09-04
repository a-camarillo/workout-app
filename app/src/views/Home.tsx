import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Base from './Base';

const Home = () => {
	return (
		<Base>
			<Box>
				<Typography variant='h1' color='primary'>
					Welcome to the workout app
				</Typography>
			</Box>
		</Base>	
	)
}

export default Home;
