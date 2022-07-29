import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoItem id="블라블라" />
    </div>
  );
}

export default App;
