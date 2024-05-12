// UNDERSTANDING REACT BASICS

function customRender(element, container) {
	const domElement = document.createElement(element.type);
	domElement.innerHTML = element.children;

	// domElement.setAttribute('href', element.props.href);
	// domElement.setAttribute('target', element.props.target);

	for (const prop in element.props) {
		if (prop === 'children') continue;

		domElement.setAttribute(prop, element.props[prop]);
	}

	container.appendChild(domElement);
}

// This syntax is different from actual React Syntax
const reactElement = {
	type: 'a',
	props: {
		href: 'https://google.com',
		target: '_blank',
	},
	children: 'Visit Google',
};

const mainContainer = document.querySelector('#root');
console.log(mainContainer);

customRender(reactElement, mainContainer);
