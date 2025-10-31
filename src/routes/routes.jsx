import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage'
import { SignUpPage } from '../pages/SignUpPage';

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
			</Routes>
		</BrowserRouter>
	);
}
