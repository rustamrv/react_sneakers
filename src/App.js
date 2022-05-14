import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const { REACT_APP_GET_ITEMS } = process.env

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch(REACT_APP_GET_ITEMS).then(res => {
      return res.json()
    }).then(json => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }   

  return (
    <div className='wrapper clear'>

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className='content p-40'>
        <div className='mb-40 d-flex align-center justify-between'>
          <h1>All sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Search...' />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {
            items.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                image={obj.image}
                onClickFavorite={() => console.log('Favorite')}
                onAdd={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;
