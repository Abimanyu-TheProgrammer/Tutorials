import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos'
import AddTask from'./AddTask'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Test extends React.Component {
  state = {
    tasks : [
      {name : "Buy bread", id:0},
      {name : "Buy Eggs", id:1},
      {name : "Buy Milk", id:2}
    ]
  }

  DelTask = (id) => {
    const Updated_tasks = this.state.tasks.filter(task => {
      return id !== task.id
    })

    this.setState({
      tasks : Updated_tasks
    })
  }

  NewTask = (task) => {
    const Updated_tasks = [...this.state.tasks, task]
    this.setState({
      tasks : Updated_tasks
    })
  }

  render() {
    return(
      <div id="main">
        <Todos todos = {this.state.tasks} DelTask = {this.DelTask} />
        <AddTask NewTask = {this.NewTask}/>
      </div>
    )
  }
}

export default Test;
