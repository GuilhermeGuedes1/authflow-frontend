import { api } from '../services/api/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const navigate = useNavigate();

	async function handleLogin() {
		if (!email || !password) {
			return setMessage('User and Password obrigatory');
		}

		const user = { email, password };

		try {
			const response = await api.post('/home/sign-in', user);

			const token = response.data.token;

			localStorage.setItem('authToken', token);

			setMessage('User Logged Suceffuly');

			setTimeout(() => {
				navigate('/home');
			}, 2000);
		} catch (error) {
			setMessage(error.response.data.message);
			setEmail('');
			setPassword('');
		}
	}

	return (
		<section className="h-screen w-screen">
			<div className="flex flex-col justify-center gap-8 items-center h-screen">
				<h1 className="text-4xl font-nunito font-bold mb-8">Login</h1>
				<p className="font-light font-nunito mt-6">
					Enter your email and password
				</p>
				<p className="font-light font-nunito mt-6 text-red-600">{message}</p>
				<div>
					<form className="flex flex-col gap-4">
						<label htmlFor="email"></label>
						<input
							type="email"
							className="border-b w-68 border-b-[#0d0d0d18f] p-8 outline-0"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="Password"></label>
						<input
							type="password"
							className="border-b border-b-neutral-950 w-68 outline-0"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							type="button"
							className="bg-black text-white  rounded-lg h-10 hover:scale-105 duration-300 cursor-pointer"
							onClick={handleLogin}>
							LOGIN
						</button>
						<p className="font-nunito text-center">
							Don't have an account?{' '}
							<span className="text-[#D87234] hover:underline cursor-pointer ">
								<a href="http://localhost:5173/signup">Sign Up</a>
							</span>
						</p>
					</form>
				</div>
			</div>
		</section>
	);
};

export { LoginPage };
