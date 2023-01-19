import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Routes , Route, useNavigate} from 'react-router-dom';
import HomePage from './components/HomePage';
import { useEffect } from 'react';
import Form from './components/Form';

function App() {
  const isAuth = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  } , [])
  return (
    <div className="App">
      <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
