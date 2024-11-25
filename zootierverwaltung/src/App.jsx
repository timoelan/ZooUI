import React, { useState } from 'react';
import AnimalTable from './components/AnimalTable';
import AnimalForm from './components/AnimalForm';
import './App.css'; 

function App() {
  const [animals, setAnimals] = useState([]);

  const addAnimal = (animal) => {
    setAnimals([...animals, animal]); 
  };

  return (
    <div className="App">
      <h1>Zootierverwaltung</h1>
      <AnimalTable animals={animals} />
      <AnimalForm onAddAnimal={addAnimal} />
    </div>
  );
}

export default App;
