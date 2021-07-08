import { useState } from 'react';
import './App.css';
import Header from './Header.js'
import Content from './content';
import Footer from './footer.js'
import {Button} from 'reactstrap';

function App() {
  const [checked,setChecked]= useState(false);
  const [open,setOpen]= useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="App">
        <Header checked={checked} setChecked={setChecked} open={open} setOpen={setOpen}
          isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Content />
        <Footer isDarkMode={isDarkMode}/>
        <div class="navbar" style={{ position: "fixed"}}>
        <Button outline color="primary" size="lg">Add hodlinfo to homescreen</Button>{'  '}
        </div>
    </div>
  );
}

export default App;
