import { useEffect, useState } from 'react';
import { api } from '../services/api/api';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const [user, setUser] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		async function loadUser() {
			try {
				const res = await api.get('/home/profile');
				console.log(res.data);

				setUser(res.data);
			} catch (error) {
				console.log(error);
				setTimeout(() => {
					navigate('/login');
				}, 2000);
			}
		}
		loadUser();
	}, []);

	if (!user) {
		return <p>401 - Unauthorized</p>;
	}

	return (
		<section>
			<h1>{`Bem vindo ${user.user.name}`}</h1>
		</section>
	);
}
