import Todo from "../Todo/Todo";

function TodoList() {

  

    return (
        <div>
            {list.length > 0 && list.map(todo =>
                <Todo
                    key={todo.id}
                    todoData={todo.todoData}
                />)}
        </div>
    )

}



export default TodoList;
