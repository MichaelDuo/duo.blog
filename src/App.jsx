import React from 'react';
import './styles/App.css';
import Pages from 'pages'
import { HashRouter as Router } from 'react-router-dom'

export default function App(){
  return (
    <Router>
      <div className="App">
        <Pages />
      </div>
    </Router>
  )
}
