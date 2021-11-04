import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import Movies from './components/Movies';
import ViewMovies from './components/ViewMovies';

function App() {
  return (
    <div className="App">
      <Header/>  
     <Movies/>

    </div>
  );
}

export default App;
