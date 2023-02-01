
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Resturantlist from './components/Resturantlist';
import Viewrest from './components/Viewrest';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';

import './bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Resturantlist/>}/>

        <Route path='/viewrest/:id' element={<Viewrest/>}/>

      </Routes>
    

      <Footer/>
      
  
    </div>
  );
}

export default App;
