import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className = 'Items-container'></div>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  );
}
export default App;
