import Todo from "./Todo"

const Todos = ({todos}) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} style={{backgroundColor: "red"}}>{todo.title}</Todo>
            ))}
        </>
    )
}

export default Todos