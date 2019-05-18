import React from "react";
import './Todo.css';


const initialTodos = [
    {
        id: 1,
        createdAt: new Date(),
        text: "todo1",
        isDone: false
    },
    {
        id: 2,
        createdAt: new Date(),
        text: "todo2",
        isDone: false
    },
    {
        id: 3,
        createdAt: new Date(),
        text: "todo3",
        isDone: true
    }
];
const FILTER_STATES = {
    ALL: "ALL",
    ACTIVE: "ACTIVE"
};


function filterTodos(todos, filterName) {
    if (filterName === FILTER_STATES.ACTIVE) {
        return todos.filter(todo => !todo.isDone);
    }

    return todos;
}

function sortedTodos(todos, fieldName) {
    return todos.sort((el1, el2) => {
        let f1 = el1[fieldName];
        let f2 = el2[fieldName];

        if (f1 === f2) return 0;

        return f1 > f2 ? 1 : -1;
    });
}

export default class Todos extends React.Component {
    state = {
        todos: initialTodos,
        filterName: FILTER_STATES.ALL,
        sortField: "createdAt", // byCreatedAt
        newTodoText: ""
    };

    showFiltered = filterName => () => {
        this.setState({
            filterName
        });
    };
    sortByField = fieldName => () => {
        this.setState({
            sortField: fieldName
        });
    };

    handleText = event => {
        this.setState({newTodoText: event.target.value})
    };
    addNewTodo = event => {
        event.preventDefault();
        const newTodo = {
            id: (this.state.todos[this.state.todos.length - 1] || {id: 0}).id + 1,
            createdAt: new Date(),
            text: this.state.newTodoText,
            isDone: false
        };
        this.setState({todos: [...this.state.todos, newTodo]})
        this.state.newTodoText = '';
    };
    handleIsDone = todo => event => {
        this.setState({
            todos: this.state.todos.map(item => {
                if (item !== todo) return item;

                return {
                    ...item,
                    isDone: event.target.checked
                };
            })
        });
    };
    deleteArr = todo => event => {
        this.setState({
            todos: this.state.todos.filter((item) => item !== todo)
        })
    };

    render() {
        let todos = filterTodos(this.state.todos, this.state.filterName);
        todos = sortedTodos(todos, this.state.sortField);

        return (
            <div className='main'>
                <button onClick={this.showFiltered(FILTER_STATES.ALL)}>All</button>
                <button onClick={this.showFiltered(FILTER_STATES.ACTIVE)}>Active</button>
                <button onClick={this.sortByField("createdAt")}>By date</button>
                <button onClick={this.sortByField("isDone")}>by isDone</button>
                <form onSubmit={this.addNewTodo}>
                    <input className='main__input' value={this.state.newTodoText} onChange={this.handleText}/>
                    <button type="submit">Add</button>
                </form>


                {todos.map(item => (
                    <div key={item.id} className={item.isDone ? "is-done" : ""}>

                        <input
                            type="checkbox"
                            checked={item.isDone}
                            onChange={this.handleIsDone(item)}
                        />
                        {item.text}
                        <span>({item.createdAt.toString()})</span>
                        <button onClick={this.deleteArr(item)}>X</button>

                    </div>
                ))}
            </div>
        );
    }
}