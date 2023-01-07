import * as React from 'react';
import './App.css';
import SignInComponent from './components/signInComponent';
import Navbar from './components/navbar';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignInComponent />
      <Footer />
    </div>
  );
}

export default App;
