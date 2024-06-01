import { useEffect, useState } from 'react';
import { TodoContextProvider } from './contexts';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
	};

	const updateTodo = (id, updatedTodo) => {
		setTodos((prev) =>
			prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
		);
	};

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggleCompleted = (id) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : { todo }
			)
		);
	};

	// Fetching todos from local storgage when App component is mounted
	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		if (todos && todos.length) {
			setTodos(todos);
		}
	}, []);

	// Updating local storage when todos array is updated
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContextProvider
			value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
		>
			<h1 className='text-5xl'>Todo App</h1>
		</TodoContextProvider>
	);
}

export default App;
