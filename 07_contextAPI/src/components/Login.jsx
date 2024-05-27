import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { user, setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username != '' && password != '') {
			setUser({ username, password });
		} else {
			alert('Invalid username or password');
		}
		console.log({ username, password });
		setUsername('');
		setPassword('');
	};

	const handleLogout = (e) => {
		e.preventDefault();

		setUser(null);
	};

	return (
		<div>
			<h2>Login</h2>

			<form id='login-form'>
				<input
					type='text'
					name='username'
					id='usename'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='username'
				/>
				<input
					type='password'
					name='password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='password'
				/>
				<button onClick={handleSubmit}>Login</button>

				{user && <button onClick={handleLogout}>Logout</button>}
			</form>
		</div>
	);
}

export default Login;
