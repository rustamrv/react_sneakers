import React from 'react';

function App() {
  return (
    <div className='wrapper clear'>
      <div className='overlay'>
        <div className='drawer'>

          <h2 className='d-flex justify-between mb-30'>Cart <img className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' />
          </h2>

          <div className='items'>

            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImg' style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>

              <div className='mr-20 flex'>
                <p className='mb-5'>Men's Sneakers "Nike Blazer Mid Suede"</p>
                <b>12 999 UAH</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />

            </div>

            

            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImg' style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>

              <div className='mr-20 flex'>
                <p className='mb-5'>Men's Sneakers "Nike Blazer Mid Suede"</p>
                <b>12 999 UAH</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />

            </div>
          </div>
          <div className='cartTotalBlock'>
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>21 000 UAH</b>
              </li>
              {/* <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1023 UAH</b>
            </li> */}
            </ul>
            <button className='greenBtn'>Оформить заказ <img src='/img/arrow.svg' alt='arrow'></img></button>
          </div>
        </div>
      </div>


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
        <div className='mb-40 d-flex align-center justify-between'>
          <h1>All sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Search...' />
          </div>
        </div>

        <div className='d-flex'>

          <div className='card'>
            <div className='favorite'>
              <img src="/img/heart-unlike.svg" />
            </div>

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
