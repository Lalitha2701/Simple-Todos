import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodoData = todosList.filter(each => each.id !== id)
    this.setState({
      todosList: filteredTodoData,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="todos-container">
        <div className="simple-todo-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="items-container">
            {todosList.map(eachItem => (
              <TodoItem
                initialTodosList={eachItem}
                key={eachItem.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
