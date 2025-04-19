import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './companents/Header';
import Hero from './companents/Hero';
import People from './companents/People';
import University from './companents/  University';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/university' element={<University/>}/>
      </Routes>
    </div>
  );
}

export default App;
