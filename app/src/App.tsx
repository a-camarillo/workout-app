import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './views/Home';
import Workouts from './views/Workouts';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
  	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/workouts' element={<Workouts/>}/>
		</Routes>
		<AppBar>
			<Typography variant="h3" component="div">
				Workout Tracker
			</Typography>
			<Typography variant="h4" component="div">
				Workouts 
			</Typography>
		</AppBar>
	</BrowserRouter>
  );
}

export default App;
