import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import "./App.css"
import TodoForm from "./Components/Todos/TodoForm"
import TodoList from "./Components/Todos/TodoList"
import TodosActions from './Components/Todos/TodosActions'
import TodosQuantity from './Components/Todos/TodosQuantity'


function App() {
	const [todos, setTodos] = useState( [] )

	const addTodoHandler = ( text ) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		}
		console.log( newTodo )
		setTodos( [...todos, newTodo] )
	}

	const todoToggleHandler = ( id ) => {
		setTodos( todos.map( todo => {
			return ( todo.id === id
				? { ...todo, isCompleted: !todo.isCompleted }
				: { ...todo } )
		} ) )
	}

	const removeTodoHandler = ( id ) => {
		setTodos( todos.filter( ( todo ) => todo.id !== id ) )
	}

	const todoResetHandler = () => {
		setTodos( [] )
	}

	const todoDeleteCompletedHandler = () => {
		setTodos( todos.filter( todo => !todo.isCompleted ) )
	}

	const completedTodosCount = todos.filter( todo => todo.isCompleted).length

	return (
		<div className="App">
			<div className="container">
				<h1>Todo List</h1>
				<TodoForm todos={todos} addTodo={addTodoHandler}/>
			</div>
			{!!todos.length &&
				<TodosActions todoReset={todoResetHandler}
											todoDeleteCompleted={todoDeleteCompletedHandler}
											completedTodosCount={!!completedTodosCount}
				/>}
			<TodoList todos={todos} todoRemove={removeTodoHandler} todoToggle={todoToggleHandler}/>
			{!!completedTodosCount && <TodosQuantity completedTodosCount={completedTodosCount}/>}
		</div>
	)
}

export default App
