import './App.css';
import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom"
import Theme from './theme/Theme';
import Auth from './auth/Auth';
import { createContext, useState } from 'react';
import Home from './pages/home/Home';
import Folder from './pages/folder/Folder';
import Demo from './pages/demo/Demo';
import ShowImage from './pages/show image/ShowImage';

export const ContextPrivder = createContext()

function App() {
  const [user,setUser] = useState(false)

  return (
<BrowserRouter>
<ContextPrivder.Provider value={{user,setUser}} >
<Routes>
<Route path='/' element={<Theme/>} >
<Route path='/' element={<Home/>}/>
  <Route path='/auth' element={<Auth/>}/>
  <Route path='/folder/:id' element={<Folder/>}/>
  <Route path='/demo' element={<Demo/>}/>
  <Route path='/image' element={<ShowImage/>}/>
</Route>
</Routes> 
</ContextPrivder.Provider>
</BrowserRouter>
  );
}

export default App;
