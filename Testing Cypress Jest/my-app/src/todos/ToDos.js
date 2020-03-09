import React from 'react';

class Todos extends React.Component {
    state = {
        newTask: '',
        todos: [{
            id: 1,
            task: 'Zrobić śniadanie',
            done: true
        }, {
            id: 2,
            task: 'Zrobić obiad',
            done: false
        }],
    };

    handleOnChange = (e) => {
        this.setState({
            newTask: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        if (this.state.newTask) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: this.state.todos.length + 1,
                        task: this.state.newTask,
                        done: false
                    }
                ]
            })
        }
    }

    getPercentage = () => {
        const doneTaskCount = this.state.todos.filter(todo => todo.done).length;

        return (doneTaskCount / this.state.todos.length).toFixed(2) * 100 + '%'
    }

    render() {
        return <div>
            <table>
                <thead>
                <tr>
                    <th>Zadanie</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.todos.map(todo => {
                        return <tr className="todo-item" key={todo.id}>
                            <td>{todo.task}</td>
                            <td>{todo.done ? '✔️' : ''}</td>
                        </tr>
                    })
                }
                </tbody>
                <tfoot>
                <tr>
                    <td>Wykonano:</td>
                    <td>{this.getPercentage()}</td>
                </tr>
                </tfoot>
            </table>
            <form onSubmit={this.handleOnSubmit}>
                <label>Dodaj zadanie</label>
                <input id="toDoInput" value={this.state.newTask} onChange={this.handleOnChange}/>
                <button id="toDoButton" type='submit'>Dodaj</button>
            </form>
        </div>
    }
}

export default Todos;