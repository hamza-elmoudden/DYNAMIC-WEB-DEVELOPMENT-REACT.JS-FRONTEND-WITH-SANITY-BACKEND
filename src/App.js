import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Page/Home';
import Sinpage from './Page/sinpage';


function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:slug' element={<Sinpage/>}/>
      </Routes>
    </>
  );
}

export default App;
