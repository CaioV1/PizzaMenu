import React from 'react';

import '../../index.css';
import Pizza from '../../models/Pizza';
import pizzaList from '../../../public/data';
import { PizzaCard } from '../../components';

const App: React.FC = () => (
  <div className='menu'>
    {
      pizzaList.map((pizza: Pizza) => (
        <ul className="pizzas">
          <PizzaCard pizzaData={pizza}/>
        </ul>
      ))
    }
  </div>
)

export default App;
