import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* App Body */}
     <div className="app__body">
        <Sidebar />
     {/* Feed */}
     {/* Widgets */}
     </div>
    </div>
  );
}

export default App;
