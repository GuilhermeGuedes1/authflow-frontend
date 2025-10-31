import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [responseMessage, setResponseMessage] = useState('');

	const navigate = useNavigate();

	function saveUser() {
		if (!name || !email || !password) {
			return setResponseMessage('Fill all the blanks');
		}

		const body = { name: name, email: email, password: password };

		axios
			.post('http://localhost:4000/home/sign-up', body)

			.then((result) => {
				console.log(result);
				setResponseMessage(result.data);
				setTimeout(() => navigate('/login'), 1000);
			})
			.catch((err) => {
				console.log(err.response);
				setResponseMessage(err.response);
			});

		setName('');
		setEmail('');
		setPassword('');
	}

	return (
		<section className="flex flex-col w-screen h-screen justify-evenly items-center">
			<div className="flex flex-col gap-8 rounded-lg ">
				<div className="flex flex-col gap-8 items-center">
					<h1 className="font-nunito font-bold text-4xl">Sign Up</h1>
					<p className="font-bold font-nunito text-[#a8a6a7]">
						Welcome, first creat your account
					</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-10">
					<div className="font-nunito text-3xl duration-300  text-green-800">
						{responseMessage}
					</div>
					<form className="flex flex-col gap-4">
						<label htmlFor="fullName"></label>
						<input
							onChange={(e) => {
								setName(e.target.value);
							}}
							type="text"
							value={name}
							placeholder="Enter Full Name"
							className="border-b-2 p-6  w-68 outline-0"
						/>
						<label htmlFor="email"></label>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							placeholder="Email"
							className="border-b-2  p-8 outline-0"
						/>
						<label htmlFor="password"></label>
						<input
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							type="password"
							placeholder="Password"
							className="border-b-2 outline-0"
						/>
					</form>
					<button
						type="button"
						className="h-10 w-68 border rounded-lg text-white bg-black cursor-pointer hover:scale-105 duration-300
                    "
						onClick={saveUser}>
						SIGN UP
					</button>
					<p className="font-nunito">
						Already have an account?{' '}
						<span className="text-[#d87234] hover:underline cursor-pointer">
							Login
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export { SignUpPage };
