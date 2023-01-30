import Todo from "./Todo"
import styles from "./TodoList.module.css"

const TodoList = ( { todos, todoRemove, todoToggle } ) => {
	if (!todos.length) {
		return <h3 className={styles.emptyNotification}>Todo list is empty</h3>
	}

	return (
		<div className={styles.todoListWrapper}>
			{todos.map( ( todo ) => {
				return <Todo todo={todo}
										 key={todo.id}
										 todoRemove={todoRemove}
										 todoToggle={todoToggle}
				/>
			} )}
		</div>
	)
}

export default TodoList
