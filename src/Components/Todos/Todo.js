import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"
import styles from "./Todo.module.css"

const Todo = ( { todo, todoRemove, todoToggle } ) => {

	return (

		<div className={`${styles.todoListItem} ${todo.isCompleted? styles.completedTodoListItem : ''}`}>
			<RiTodoFill className={styles.todoRiFillIcon}/>
			<p>{todo.text}</p>
			<RiDeleteBin2Line
				className={styles.todoDeleteIcon}
				onClick={() => todoRemove( todo.id )}
			/>
			<FaCheck
				className={styles.todoCheckIcon}
				onClick={() => todoToggle(todo.id)}
			/>
		</div>
	)
}

export default Todo
