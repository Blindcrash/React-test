import React from 'react';

import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Table from './Table';

import items from '../data/menu';

function App() {
  
  return (
    <div className="App">
      <Header title="Blindcrash" items={items}></Header>
      <Content></Content>
      <Table></Table>
      <Footer></Footer>
    </div>
  );
}
export default App;
