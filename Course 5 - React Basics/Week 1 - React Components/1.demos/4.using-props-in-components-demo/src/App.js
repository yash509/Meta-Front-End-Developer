import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Anna" color="purple" />
      <div className="grid-box">
        <Main greet="Howdy" />
        <Sidebar greet="Hi" />
      </div>
    </div>
  );
}

export default App;
