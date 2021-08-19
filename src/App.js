import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  
  const [theme, setTheme] = useState('light');

  return (
    <div className="container-fluid">
     <Header theme={theme}/>
    </div>
  );
}

export default App;
