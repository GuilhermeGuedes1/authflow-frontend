import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage'
import { SignUpPage } from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';


export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/signUp"
					element={<SignUpPage />}
				/>

				<Route
					path="/"
					element={<Navigate to="/signUp" />}
				/>
				<Route path='/home' element={<HomePage/>}/>
			</Routes>
		</BrowserRouter>
	);
}
