import React, { useState } from 'react';

import TodoItem from '../TodoItem.jsx';

import { getData, changeData } from '../database.js';

class DoneList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.setState({ todos: getData(true) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updatedDataTime !== this.props.updatedDataTime) {
      this.setState({ todos: getData(true) });
    }
  }

  onTodoClick = id => {
    changeData(id, false);

    this.props.updateDataTime();
  };

  render() {
    return (
      <div className="todoList">
        <h2>Done!</h2>
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

export default DoneList;
