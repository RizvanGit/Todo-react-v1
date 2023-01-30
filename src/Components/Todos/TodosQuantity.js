import styles from './TodosQuantity.module.css'
const TodosQuantity = ( {completedTodosCount}) => {
	return <div className={`container ${styles.todosQuantity}`}>
		{`You completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}
	</div>
}
export default TodosQuantity