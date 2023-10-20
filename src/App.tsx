import React from 'react';

import './index.css';
import Pizza from './models/Pizza';
import pizzaList from '../public/data';
import { Header, Footer, PizzaCard } from './components';

const App: React.FC = () => (
  <div className='container'>
    <Header title='Pizza Menu'/>
    {
      pizzaList.map((pizza: Pizza) => (
        <ul className="pizzas">
          <PizzaCard pizzaData={pizza}/>
        </ul>
      ))
    }
    <Footer />
  </div>
)

export default App;
