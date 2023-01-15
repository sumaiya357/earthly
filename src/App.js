import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shop from './components/Shop/Shop'

function App() {
  return (
    <div className="App ">
     <div className='container'>
     <Header></Header>
     <Shop></Shop>
     </div>
    </div>
  );
}

export default App;
