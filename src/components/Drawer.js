import React from 'react'

const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className='overlay'>
            <div className='drawer'>

                <h2 className='d-flex justify-between mb-30'>
                    Cart <img onClick={onClose} className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' />
                </h2>

                <div className='items'>
                    {items.map((obj) => ( 
                    <div className='cartItem d-flex align-center mb-20'>
                        <div className='cartItemImg' style={{ backgroundImage: `url(${obj.image})` }}></div>

                        <div className='mr-20 flex'>
                            <p className='mb-5'>{obj.title}</p>
                            <b>{obj.price} UAH</b>
                        </div>
                        <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
                    </div>
                        ))}
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