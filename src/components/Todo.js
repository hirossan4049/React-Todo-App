const Todo = ({ todo }) => {
    return (
        <div className={"todo"}>
            <p className={"title"}>{todo.title}</p>
            <p className={"description"}>詳細</p>
        </div>
    )
}
export default Todo