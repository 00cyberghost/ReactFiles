import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import { useState,createContext } from 'react';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';
import { QueryClient,QueryClientProvider } from 'react-query';


export const AppContext = createContext()

function App() {

  const client = new QueryClient({
    defaultOptions :{
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false
      }
    }
  })

  return (
    <div className="App">
     <QueryClientProvider client={client}>
      <Router>
        <ul style={{display: 'inline',listStyleType: 'none'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </Router>
     </QueryClientProvider>
    </div>
  );
}



export default App;
