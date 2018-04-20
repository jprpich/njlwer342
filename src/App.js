import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas


class App extends Component {
  constructor() {
    super();
    this.state = {value: '', 
                  tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addTask(event){
    this.setState({
      tasks: this.state.tasks.concat(this.state.value),
      value: ""
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map(task => 
              <li>{task}</li>
            )}
          </ul>
           <form onSubmit={this.addTask}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.value} onChange={this.handleChange}  />
           </form>
        </div>
      </div>
    )
  }

}


export default App;
