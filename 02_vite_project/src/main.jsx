/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
	return (
		<div>
			<h2>My App</h2>
		</div>
	);
}

const userDefinedElement = (
	<a href='https://google.com' target='_blank'>
		Visit Google
	</a>
);

const userVariable = 'RK';

// Actual React Syntax
const reactElement = React.createElement(
	'a',
	{ href: 'https://google.com', target: '_blank' },
	'Visit Google',
	userVariable
);

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	// 	{/* <App /> */}
	// </React.StrictMode>

	// MyApp()
	// <MyApp />

	// userDefinedElement
	reactElement
);
