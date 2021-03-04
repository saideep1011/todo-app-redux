import logo from "./logo.svg";
import "./App.css";
import InputField from "./Components/InputField";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="my-4">
      <h1>Todo App</h1>
      <InputField />
      <TodoList />
    </div>
  );
}

export default App;
