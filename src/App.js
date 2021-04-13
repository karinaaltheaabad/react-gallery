import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
    </div>
  );
}

export default App;
