import React from 'react';

function App() {
  return (
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className='opacity-5'>Shop the best sneakers</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 UAH</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>

        </ul>
      </header>

      <div className='content p-40'>
        <h1 className='mb-40'>All sneakers</h1>

        <div className='d-flex'>

          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='Sneakers' />
            <h5>Men's Sneakers "Nike Blazer Mid Suede"</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/add.svg' alt='add' />
              </button>
            </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/2.jpg' alt='Sneakers' />
            <h5>Men's Sneakers "Nike Blazer Mid Suede"</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/add.svg' alt='add' />
              </button>
            </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/3.jpg' alt='Sneakers' />
            <h5>Men's Sneakers "Nike Blazer Mid Suede"</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/add.svg' alt='add' />
              </button>
            </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/4.jpg' alt='Sneakers' />
            <h5>Men's Sneakers "Nike Blazer Mid Suede"</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/add.svg' alt='add' />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
