import React, { useEffect, useState } from 'react';

import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';

const { REACT_APP_GET_ITEMS, REACT_APP_GET_CART, REACT_APP_GET_FAVORITES } = process.env

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      const cartResponse = await axios.get(REACT_APP_GET_CART)
      setCartItems(cartResponse.data)

      const favoriteResponse = await axios.get(REACT_APP_GET_FAVORITES)
      setFavorites(favoriteResponse.data)

      const itemsResponse = await axios.get(REACT_APP_GET_ITEMS)
      setItems(itemsResponse.data)

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        onRemoveInCart(obj.id)
      } else {

        axios.post(REACT_APP_GET_CART, {
          ...obj,
          itemId: obj.id
        });
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) { }
  }

  const onRemoveInCart = (id) => {
    axios.delete(`${REACT_APP_GET_CART}/${id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const onAddToFavorite = (obj) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`${REACT_APP_GET_FAVORITES}/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = axios.post(REACT_APP_GET_FAVORITES, obj);
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {

    }
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.itemId) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }}>
      <div className='wrapper clear'>
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveInCart} />}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSearchInput={onSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }>

          </Route>
          <Route path="/favorites" exact
            element={
              <Favorites />
            }>

          </Route>
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
