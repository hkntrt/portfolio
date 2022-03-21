import React from 'react';
import Header from './components/Header';
import CardView from './components/Cardview';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Gallery></Gallery>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
