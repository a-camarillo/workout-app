import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/Home';
import Workouts from './views/Workouts';
import NewWorkout from './views/NewWorkout';
import { darkTheme } from './themes';

const App = () => {
  return (
  	<BrowserRouter>
		<LocalizationProvider dateAdapter={ AdapterDayjs }>
		<ThemeProvider theme={darkTheme}>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/workouts' element={<Workouts/>}/>
				<Route path='/new-workout' element={<NewWorkout/>}/>
			</Routes>
		</ThemeProvider>
		</LocalizationProvider>
  	</BrowserRouter>

  );
}

export default App;
