import { useState } from 'react';

function App() {
	const [color, setColor] = useState('white');

	return (
		<>
			<div className='h-screen' style={{ backgroundColor: color }}>
				<h1
					className='text-4xl text-center p-4 bg-slate-400 rounded-md mx-4 shadow-xl fixed inset-x-0 top-6'
					style={{ color: color }}
				>
					Background Color Changer
				</h1>

				<div className='flex flex-wrap justify-center fixed bottom-6 inset-x-0 m-2 rounded-md'>
					<div className='flex flex-wrap justify-center gap-3 shadow-xl bg-slate-300 py-2 rounded-md text-xl'>
						<button
							className='outline-none px-4 py-2 m-2 rounded-md text-white shadow-xl bg-red-600'
							onClick={() => setColor('red')}
						>
							Red
						</button>

						<button
							className='outline-none px-4 py-2 m-2 rounded-md text-white shadow-xl bg-green-600'
							onClick={() => setColor('green')}
						>
							Green
						</button>

						<button
							className='outline-none px-4 py-2 m-2 rounded-md text-white shadow-xl bg-blue-600'
							onClick={() => setColor('blue')}
						>
							Blue
						</button>

						<button
							className='outline-none px-4 py-2 m-2 rounded-md text-white shadow-xl bg-black'
							onClick={() => setColor('black')}
						>
							Black
						</button>

						<button
							className='outline-none px-4 py-2 m-2 rounded-md shadow-xl bg-white'
							onClick={() => setColor('white')}
						>
							White
						</button>

						<button
							className='outline-none px-4 py-2 m-2 rounded-md shadow-xl bg-yellow-300'
							onClick={() => setColor('yellow')}
						>
							Yellow
						</button>

						<button
							className='outline-none px-4 py-2 m-2 rounded-md text-white shadow-xl bg-purple-700'
							onClick={() => setColor('purple')}
						>
							Purple
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
