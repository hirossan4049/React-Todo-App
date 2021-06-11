import {useContext} from "react";
import {TodoContext} from "../App"

const Todo = ({todo,}) => {
    const handleClickTodo = useContext(TodoContext)
    return (
        <div className={"todo"}>
            {/*checked={todo.isDone}*/}
            <input type={"checkbox"} checked={todo.isDone} className={"checkbox"} onChange={(e) => {
                handleClickTodo(todo.id)
            }
            }/>

            <div className={"title-w-description"}>
                <p className={"title"}>{todo.title}</p>
                <p className={"description"}>詳細</p>
            </div>
        </div>
    )
}
export default Todo