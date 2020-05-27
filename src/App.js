/* Dependencies */
import React from 'react';

/* Components */
import { Header } from './components/Header';
import { ListCards } from './components/ListCards';

/* Styles */
import './App.css';
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
      <main className="container">
        <Header title={"My notebook in React"} />
        <ListCards />
      </main>
    </div>
  );
}

export default App;
