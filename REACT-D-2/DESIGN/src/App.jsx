import Card from './components/Card.jsx';
import './App.css'
import Header from './components/Header.jsx';

import { Button } from './components/ui/button.jsx';

function App() {
  

  return (
    <>
      <h1 className="text-blue-600 dark:test-sky-400 border-2 p-4 rounded-xl">
        UJJWAL SUMAN
      </h1>
      <Header />
   
      <Button  variant='outline' >Ujjwal</Button>
      <div className="flex gap-4">
        <Card title="buy python corse"  
        buttonText="Join Now"/>
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App
