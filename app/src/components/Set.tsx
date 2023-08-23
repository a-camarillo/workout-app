import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type SetProps = {
	reps: number;	
	weight: number;	
	unit: string;
//	handleUnitChange: (event: SelectChangeEvent) => void;
};

const Set = ({
		reps,
		weight,
		unit,
	//handleUnitChange,
		}: SetProps) => {	
	return (	
		<Grid container spacing={2}>
			<Grid item>
				<FormControl>
					<InputLabel>Reps</InputLabel>
					<Input
						inputProps={{
							min: 0,
							max: 100,
							type: 'number',
						}}
					/>
				</FormControl>
			</Grid>
			<Grid item>
				<FormControl>
					<InputLabel>Weight</InputLabel>
					<Input
						inputProps={{
							min: 0,
							max: 1000,
							step: 0.5,
							type: 'number',
						}}
					/>
				</FormControl>
			</Grid>
			<Grid item>
				<Typography>
						{unit}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Set
