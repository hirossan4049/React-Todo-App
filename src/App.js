import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import Todos from "./components/Todos"
import {useState} from "react";

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

    return (
        <>
            <Header title={"Todoを入力"} onAdd={onAddClicked}/>
            <h3>未完了</h3>
            <div className={"todo-box"}>
                <Todos todos={todos.filter((todo) => (!todo.isDone))}/>
            </div>
            <h3>完了</h3>
            <div className={"todo-box"}>
                <Todos todos={todos.filter((todo) => (todo.isDone))}/>
            </div>
        </>
    );
}

export default App;
