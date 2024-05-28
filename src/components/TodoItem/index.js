import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
