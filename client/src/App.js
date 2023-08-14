import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail';
import CreateRecipe from './Components/CreateRecipe/CreateRecipe';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/recipes/:id' element={<Detail />} />
        <Route path='/recipe/create' element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
