
import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"



function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1' },
    { id: 2, todoData: 'todo 2' }
  ]);

  return (
    <>
      <AddTodo />
      <TodoList list={list}/>
    </>
  )
}
<TodoList />

export default App

