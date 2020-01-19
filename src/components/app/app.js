import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import './app.css';

class App extends Component {

    maxId = 100;

    createTodoItem = (label) => {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false
        }
    };

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newTodoData = [...todoData, newItem];
            return {
                todoData: newTodoData
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        const newArray = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
        return newArray;
    }

    toggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    toggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    searchChange = (term) => {
        this.setState({term});
    };

    filterChange = (filter) => {
        this.setState({filter});
    };

    search = (todoData, term) => {
        if (term.length === 0) {
            return todoData;
        }
        return  todoData
            .filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };

    filter = (todoData, filter) => {
        if (filter.length === 0) {
            return todoData;
        }

        switch (filter) {
            case 'all': return todoData;
            case 'active': return todoData.filter(item => !item.done);
            case 'done': return todoData.filter(item => item.done);
            default: return todoData;
        }
    };

    render() {
        const {todoData, term, filter} = this.state;
        console.log(filter);
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((item) => item.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.searchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.filterChange}
                    />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}
                />
                <ItemAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;