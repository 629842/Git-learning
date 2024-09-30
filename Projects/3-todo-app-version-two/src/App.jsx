import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Book",
      dueDate: "04/09/24",
    },
    {
      name: "Go to School",
      dueDate: "04/09/24",
    },
    {
      name: "Go to Picnic",
      dueDate: "05/09/24",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default App;
