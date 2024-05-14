/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';

function App() {
	const [length, setLength] = useState(8);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSpecialCharacters, setIncludeSpecialCharacters] =
		useState(false);
	const [password, setPassword] = useState('pass');

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const numbers = '0123456789';
	const specialCharacters = '!@#$%^&*()_';

	const generatePassword = useCallback(() => {
		let pass = '';
		let str = alphabet;

		if (includeNumbers) str += numbers;
		if (includeSpecialCharacters) str += specialCharacters;

		for (let i = 0; i < length; i++) {
			pass += str.charAt(Math.floor(Math.random() * str.length + 1));
		}

		setPassword(pass);
	}, [length, includeNumbers, includeSpecialCharacters]);

	useEffect(() => {
		generatePassword();
	}, [length, includeNumbers, includeSpecialCharacters, generatePassword]);

	const copyPassword = () => {
		window.navigator.clipboard.writeText(password);
	};

	return (
		<div className='items-center text-lg'>
			<h1 className='text-5xl text-center my-10'>Password Generator</h1>

			{/* Password */}
			<div className='flex my-10 bg-yellow-300 w-[400px] mx-auto rounded-md'>
				<input
					type='text'
					name='Password'
					value={password}
					readOnly
					className='border-blue-500 border-2 p-1 w-[80%] rounded-l-md text-center cursor-pointer outline-none'
				></input>
				<button onClick={copyPassword} className='w-[20%]'>
					Copy
				</button>
			</div>

			{/* Length */}
			<div className='flex justify-center items-center gap-3 m-3 select-text bg-yellow-300 w-[400px] h-10 mx-auto rounded-lg'>
				<input
					type='range'
					min={6}
					max={20}
					name='length'
					id='length'
					value={length}
					onChange={(e) => setLength(e.target.value)}
				/>
				<label htmlFor='length'>Length: {length}</label>
			</div>

			{/* Numbers */}
			<div className='flex justify-center items-center gap-3 m-3 bg-yellow-300 w-[400px] h-10 mx-auto rounded-lg'>
				<input
					type='checkbox'
					value={includeNumbers}
					name='includeNumbers'
					id='includeNumbers'
					onClick={() => setIncludeNumbers((prev) => !prev)}
					className='size-4'
				/>
				<label htmlFor='includeNumbers' className='select-none'>
					Include Numbers
				</label>
			</div>

			{/* Special Characters */}
			<div className='flex justify-center items-center gap-3 m-3 bg-yellow-300 w-[400px] h-10 mx-auto rounded-md'>
				<input
					type='checkbox'
					value={includeSpecialCharacters}
					name='includeSpecialCharacters'
					id='includeSpecialCharacters'
					onClick={() => setIncludeSpecialCharacters((prev) => !prev)}
					className='size-4'
				/>
				<label htmlFor='includeSpecialCharacters' className='select-none'>
					Include Special Characters
				</label>
			</div>

			<button
				className='flex justify-center items-center bg-blue-500 w-[400px] h-10 mx-auto rounded-md'
				onClick={generatePassword}
			>
				Generate Random Password
			</button>
		</div>
	);
}

export default App;
