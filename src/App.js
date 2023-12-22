import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';


//const man = 'I hate girls'

function App() {
  
  const [username,setUsername] = useState('clinton')

  return (
    <div className="App">
     <Router>
      <ul style={{display: 'inline',listStyleType: 'none'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home username={username} />} />
        <Route path='/contact' element={<Contact username={username} />} />
        <Route path='/menu' element={<Menu username={username} setUsername={setUsername} />} />
      </Routes>
     </Router>
    </div>
  );
}



export default App;
