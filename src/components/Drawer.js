import React from 'react'

const Drawer = () => {
    return (
        <div style={{ display: 'none' }} className='overlay'>
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
                    </ul>
                    <button className='greenBtn'>Оформить заказ <img src='/img/arrow.svg' alt='arrow'></img></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer