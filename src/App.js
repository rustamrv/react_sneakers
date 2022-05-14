import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const sneakers = [
  { title: "Men's Sneakers `Nike Blazer Mid Suede`", price: 1200, image: '/img/sneakers/1.jpg' },
  { title: "Nike Air Max 270 Men's Running Shoes", price: 1300, image: '/img/sneakers/2.jpg' },
  { title: "Nike Air Max 270 Men's Running Shoes", price: 1360, image: '/img/sneakers/3.jpg' },
  { title: "Nike Air Max 270 Men's Running Shoes", price: 1050, image: '/img/sneakers/4.jpg' },

]

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />

      <div className='content p-40'>
        <div className='mb-40 d-flex align-center justify-between'>
          <h1>All sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Search...' />
          </div>
        </div>

        <div className='d-flex'>
          {
              sneakers.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                image={obj.image}
              />
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;
