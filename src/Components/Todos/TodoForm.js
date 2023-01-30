import styles from "./TodoForm.module.css"
import { useState } from "react"
import Button from '../UI/Button'
const TodoForm = ( { todos, addTodo } ) => {
	const [inputTodo, setInputTodo] = useState( "" )
	const formSubmitHandler = ( event ) => {
		event.preventDefault()

		if ( inputTodo ) {
			addTodo( inputTodo )
			setInputTodo( "" )
		}
	}

	const inputChangeHandler = ( event ) => {
		setInputTodo( event.target.value )
	}

	return (
		<form className={styles.todoForm} onSubmit={formSubmitHandler}>
			<input
				type="text"
				value={inputTodo}
				className={styles.todoFormInput}
				onChange={inputChangeHandler}
			/>
			<Button type="submit"  title="Submit">
				Submit
			</Button>
		</form>
	)
}

export default TodoForm
