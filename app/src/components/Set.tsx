import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'

const Set = () => {
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
				<FormControl>
					<Select>
						<MenuItem value={'lb'}>lb</MenuItem>
						<MenuItem value={'kg'}>kg</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	)
}

export default Set
