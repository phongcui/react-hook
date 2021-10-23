import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import "./App.css";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <Todo></Todo>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
