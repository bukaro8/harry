import './App.css';
import ListDisplay from './components/ListDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <div className='App container'>
      <SearchBar />
      <ListDisplay />
    </div>
  );
}

export default App;
