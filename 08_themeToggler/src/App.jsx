import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
import { Batman, Joker } from './assets/images';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

function App() {
	const [themeMode, setThemeMode] = useState('light');

	const darkTheme = () => {
		setThemeMode('dark');
	};

	const lightTheme = () => {
		setThemeMode('light');
	};

	useEffect(() => {
		document.querySelector('html').classList.remove('dark', 'light');
		document.querySelector('html').classList.add(themeMode);
	}, [themeMode]);
	return (
		<ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
			<div className='flex flex-wrap h-screen items-center'>
				<h1 className='text-5xl font-bold mx-auto my-4 text-center'>
					Theme Toggler for Cards
				</h1>
				<div className='w-full '>
					<div className='w-full mx-auto flex justify-center my-2 p-2 '>
						<ThemeButton />
					</div>

					<div className='w-full mx-auto my-4 flex justify-center flex-wrap gap-2'>
						<Card
							image={Batman}
							alt='Batman'
							title='AI Generated Image of Batman'
							price='9'
						/>
						<Card
							image={Joker}
							alt='Joker'
							title='AI Generated Image of Joker'
							price='11'
						/>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
