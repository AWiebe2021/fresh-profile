import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {

  return (
    <div>
      <main>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
