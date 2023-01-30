import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import Button from '../UI/Button'

const TodosActions = ( {todoReset, todoDeleteCompleted, completedTodosCount} ) => {
	return (
		<>
			<Button
				children={<RiDeleteBin2Line/>}
				title="Clear completed todos"
				onClick={todoDeleteCompleted}
				disabled={!completedTodosCount}
			/>
			<Button
				children={<RiRefreshLine />}
				title="Reset todos"
				onClick={todoReset}
			/>
		</>
	)
}

export default  TodosActions