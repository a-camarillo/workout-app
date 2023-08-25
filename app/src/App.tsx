import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Workouts from './views/Workouts';
import NewWorkout from './views/NewWorkout';

const App = () => {
  return (
  	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/workouts' element={<Workouts/>}/>
			<Route path='/new-workout' element={<NewWorkout/>}/>
		</Routes>
  	</BrowserRouter>

  );
}

export default App;
