import React, { useEffect, useState } from 'react';

import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


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
    axios.get(REACT_APP_GET_FAVORITES).then((res) => {
      setFavorites(res.data)
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
    if (favorites.find(item => item.id == obj.id)) {
      axios.delete(`${REACT_APP_GET_FAVORITES}/${obj.id}`);
      setFavorites(prev => prev.filter(item => item.id != obj.id))
    } else {
      axios.post(REACT_APP_GET_FAVORITES, obj);
      setFavorites(prev => [...prev, obj])
    }
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='wrapper clear'>

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveInCart} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onSearchInput={onSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }>

        </Route>
        <Route path="/favorites" exact
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite} />
          }>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
