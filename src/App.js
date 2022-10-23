
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Allmember from './components/Allmember/Allmember';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';


import Details from './components/Blog/Details';




function App() {
  return (
    <div className="App">
      <Router>
    
        
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/allmember'  element={<Allmember/>} />
      <Route path='/blog'  element={<Blog/>} />
      <Route path='/blog-details' element={<Details/>}/>
      


    </Routes>
  
    </Router>
      
    </div>
  );
}

export default App;
