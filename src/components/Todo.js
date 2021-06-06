const Todo = ({todo}) => {
    return (
        <div className={"todo"}>
            {/*checked={todo.isDone}*/}
            <input type={"checkbox"} checked={todo.isDone} className={"checkbox"}  onChange={(e) => {
                todo.isDone = e.currentTarget.checked
            }
            } />

            <div className={"title-w-description"}>
                <p className={"title"}>{todo.title}</p>
                <p className={"description"}>詳細</p>
            </div>
        </div>
    )
}
export default Todo