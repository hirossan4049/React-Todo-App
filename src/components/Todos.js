const Todos = ({todos}) => {
    return (
        <>
            {todos.map((todo) => (
                <h3 key={todo.id} style={{backgroundColor: "red"}}>{todo.title}</h3>
            ))}
        </>
    )
}

export default Todos