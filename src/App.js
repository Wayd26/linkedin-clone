import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* App Body */}
     <div className="app__body">
        <Sidebar />
     {/* Feed */}
     <Feed />
     {/* Widgets */}
     {/* <div style={{flex: '0.2'}}></div> */}
     </div>
    </div>
  );
}

export default App;
