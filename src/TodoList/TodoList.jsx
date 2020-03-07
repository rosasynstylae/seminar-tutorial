import React from 'react';

import TodoItem from '../TodoItem.jsx';

import { getData, changeData } from '../database.js';

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.setState({ todos: getData(false) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updatedDataTime !== this.props.updatedDataTime) {
      this.setState({ todos: getData(false) });
    }
  }

  onTodoClick = id => {
    changeData(id, true);

    this.props.updateDataTime();
  };

  render() {
    return (
      <div className="todoList">
        <h2>Todo!</h2>
        <div>
          {this.state.todos.map(todo => (
            <TodoItem
              key={todo.id}
              color={this.props.color}
              todo={todo}
              onClick={this.onTodoClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
