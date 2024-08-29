
import React from 'react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Menu from './component/Menu';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, backgroundColor: '#f7f7f7' }}>
        <Header />
        <Menu />
      </div>
    </div>
  );
}

export default App;



