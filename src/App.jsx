import React from 'react';

import './App.css';

import TodoList from './TodoList/TodoList.jsx';
import DoneList from './DoneList/DoneList.jsx';

class App extends React.Component {
  state = {
    color: 'green',
    updatedDataTime: '',
  };

  updateColor = () => {
    this.setState(({ color }) => ({
      color: color === 'green' ? 'blue' : 'green',
    }));
  };

  updateDataTime = () => {
    this.setState({ updatedDataTime: new Date() });
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.updateColor}>Change Color!</button>
        <div className="innerWrapper">
          <TodoList
            color={this.state.color}
            updatedDataTime={this.state.updatedDataTime}
            updateDataTime={this.updateDataTime}
          />
          <DoneList
            color={this.state.color}
            updatedDataTime={this.state.updatedDataTime}
            updateDataTime={this.updateDataTime}
          />
        </div>
      </div>
    );
  }
}

export default App;
