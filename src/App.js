import './App.css';
import Signup  from './Signup'
import Login from './Login'
import Content from './Content';
import Men from './Men';
import Ladies from './Ladies';
import Kids from './Kids';
import HouseHold from './HouseHold';
import Beauty from './Beauty';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    {/* <div>
      <Content/>
    </div> */}
    
    
    
    <Routes>
    <Route path='/' element ={<Signup/>} />
    <Route path='/login' element ={<Login/>} />
    <Route path='/home' element ={<Content/>} />
    <Route path='/men' element ={<Men/>} />
    <Route path='/ladies' element ={<Ladies/>} />
    <Route path='/Kids' element ={<Kids/>} />
    <Route path='/HouseHold' element ={<HouseHold/>} />
    <Route path='/Beauty' element ={<Beauty/>} />
    </Routes>
    

   </BrowserRouter>
    
    </>
  );
}

export default App;
