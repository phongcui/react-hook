import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import "./App.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <TodoContextProvider>
          <Todo></Todo>
        </TodoContextProvider>
        <ThemeToggle> </ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
