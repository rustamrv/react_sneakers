import React from 'react'

const Drawer = ({ onClose, items = [], onRemove }) => {
    return (
        <div className='overlay'>
            <div className='drawer'>

                <h2 className='d-flex justify-between mb-30'>
                    Cart <img onClick={onClose} className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' />
                </h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className='items'>
                                {items.map((obj) => (
                                    <div className='cartItem d-flex align-center mb-20'>
                                        <div className='cartItemImg' style={{ backgroundImage: `url(${obj.image})` }}></div>

                                        <div className='mr-20 flex'>
                                            <p className='mb-5'>{obj.title}</p>
                                            <b>{obj.price} UAH</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
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
                        :
                        <div className='cartEmpty d-flex align-center justify-center flex-column flex' >
                            <img className='mb-20' width={120} height={120} src='/img/empty-cart.jpg' alt='Empty cart' />
                            <h2>Empty cart</h2>
                            <p className='op-6'>Add sneakers</p>
                            <button onClick={onClose} className='greenButton'>
                                <img src='/img/arrow.svg' alt='Arrow' /> Back
                            </button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Drawer