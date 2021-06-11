import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import Todos from "./components/Todos"
import {useState, createContext} from "react";
export const TodoContext = createContext({})

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "one",
            isDone: false
        },
        {
            id: 2,
            title: "two",
            isDone: false
        },
        {
            id: 3,
            title: "three",
            isDone: true
        }
    ])

    const onAddClicked = (text) => {
        setTodos([...todos, {
            id: 4,
            title: text,
            isDone: false
        }])
    }

    const handleClickTodo = (id) => {
        const newTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })

        setTodos(newTodo)
    }



    return (
        <>
            <Header title={"Todoを入力"} onAdd={onAddClicked}/>
            <TodoContext.Provider value={handleClickTodo}>
                <h3 className={"is-finished"}>未完了</h3>
                <div className={"todo-box"}>
                    <Todos handleClickTodo={handleClickTodo} todos={todos.filter((todo) => (!todo.isDone))}/>
                </div>
                <h3 className={"is-finished"}>完了</h3>
                <div className={"todo-box"}>
                    <Todos handleClickTodo={handleClickTodo} todos={todos.filter((todo) => (todo.isDone))}/>
                </div>
            </TodoContext.Provider>
        </>
    );
}


export default App;
