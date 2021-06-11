import Todo from "./Todo"

const Todos = ({todos, handleClickTodo}) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo handleClickTodo={handleClickTodo} todo={todo} key={todo.id} style={{backgroundColor: "red"}}>{todo.title}</Todo>
            ))}
        </>
    )
}

export default Todos