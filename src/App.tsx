import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useUserStore } from './zustand-store/zustand';
import Profile from './pages/Profile';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
