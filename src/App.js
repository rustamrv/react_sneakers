import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import { Route } from 'react-router-dom';


const { REACT_APP_GET_ITEMS, REACT_APP_GET_CART, REACT_APP_GET_FAVORITES } = process.env

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios.get(REACT_APP_GET_ITEMS).then((res) => {
      setItems(res.data)
    })
    axios.get(REACT_APP_GET_CART).then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post(REACT_APP_GET_CART, obj);
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveInCart = (id) => {
    axios.delete(`${REACT_APP_GET_CART}/${id}`);
    setCartItems(prev => prev.filter(item => item.id != id))
  }

  const onAddToFavorite = (obj) => {
    axios.post(REACT_APP_GET_FAVORITES, obj);
    setFavorites(prev => [...prev, obj])
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='wrapper clear'>

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveInCart} />}
      <Route path='/'>
        <Header onClickCart={() => setCartOpened(true)} />
      </Route>

      <div className='content p-40'>
        <div className='mb-40 d-flex align-center justify-between'>
          <h1>{searchValue ? `Search by "${searchValue}"` : "All sneakers"} </h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src='/img/btn-remove.svg' alt='Clear' />}
            <input onChange={onSearchInput} value={searchValue} placeholder='Search...' />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {
            items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Card
                  key={index}
                  title={obj.title}
                  price={obj.price}
                  image={obj.image}
                  onFavorite={(obj) => onAddToFavorite(obj)}
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
