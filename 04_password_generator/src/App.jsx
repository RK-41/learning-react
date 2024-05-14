/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
	const [length, setLength] = useState(8);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSpecialCharacters, setIncludeSpecialCharacters] =
		useState(false);
	const [password, setPassword] = useState('pass');
	const passwordRef = useRef(null);

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
		passwordRef.current.select();
	};

	return (
		<div className='items-center text-lg'>
			<h1 className='text-5xl text-blue-500 text-center p-4 my-20 w-[520px] rounded-lg mx-auto shadow-xl shadow-blue-500'>
				Password Generator
			</h1>

			{/* Password */}
			<div className='flex my-10 bg-blue-500 w-[440px] mx-auto rounded-lg shadow-lg shadow-blue-500'>
				<input
					type='text'
					name='Password'
					value={password}
					readOnly
					ref={passwordRef}
					className='border-blue-500 border-2 p-1 w-[80%] rounded-l-lg text-center cursor-pointer outline-none selection:bg-[#33ff33]'
				></input>
				<button onClick={copyPassword} className='w-[20%] text-[#ffff33]'>
					Copy
				</button>
			</div>

			{/* Length */}
			<div className='flex justify-center items-center gap-3 m-3 select-text bg-[#ffff33] w-[440px] h-10 mx-auto rounded-lg shadow-md shadow-yellow-400'>
				<label htmlFor='length' className='w-24'>
					Length: {length}
				</label>
				<input
					type='range'
					min={6}
					max={30}
					name='length'
					id='length'
					value={length}
					onChange={(e) => setLength(e.target.value)}
					className='cursor-pointer'
				/>
			</div>

			{/* Numbers */}
			<div className='flex justify-center items-center gap-3 m-3 bg-[#ffff33] w-[440px] h-10 mx-auto rounded-lg shadow-md shadow-yellow-400 cursor-pointer'>
				<input
					type='checkbox'
					value={includeNumbers}
					name='includeNumbers'
					id='includeNumbers'
					onClick={() => setIncludeNumbers((prev) => !prev)}
					className='size-4 cursor-pointer'
				/>
				<label htmlFor='includeNumbers' className='select-none cursor-pointer'>
					Include Numbers
				</label>
			</div>

			{/* Special Characters */}
			<div className='flex justify-center items-center gap-3 m-3 bg-[#ffff33] w-[440px] h-10 mx-auto rounded-lg shadow-md shadow-yellow-400 cursor-pointer'>
				<input
					type='checkbox'
					value={includeSpecialCharacters}
					name='includeSpecialCharacters'
					id='includeSpecialCharacters'
					onClick={() => setIncludeSpecialCharacters((prev) => !prev)}
					className='size-4 cursor-pointer'
				/>
				<label
					htmlFor='includeSpecialCharacters'
					className='select-none cursor-pointer'
				>
					Include Special Characters
				</label>
			</div>

			<button
				className='flex justify-center items-center bg-[#33ff33] w-[440px] h-10 mx-auto rounded-lg shadow-md shadow-green-500'
				onClick={generatePassword}
			>
				Generate Random Password
			</button>
		</div>
	);
}

export default App;
