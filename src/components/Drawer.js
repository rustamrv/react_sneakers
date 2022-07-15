import React from 'react'
import AppContext from '../context'
import Info from './Info'
import axios from 'axios';

const { REACT_APP_GET_ORDERS, REACT_APP_GET_CART } = process.env

const Drawer = ({ onClose, items = [], onRemove }) => {
    const { cartItems, setCartItems } = React.useContext(AppContext)
    const [orderId, setOrderId] = React.useState(null)

    const [isOrserComplete, setIsOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post(REACT_APP_GET_ORDERS, {
                items: cartItems
            });
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            cartItems.forEach(async (item) => {
                await axios.delete(`${REACT_APP_GET_CART}/${item.id}`);
            });

        } catch (error) {
            alert('Error create order')
        }
        setIsLoading(false)
    }

    return (
        <div className='overlay'>
            <div className='drawer'>

                <h2 className='d-flex justify-between mb-30'>
                    Cart <img onClick={onClose} className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' />
                </h2>

                {
                    items.length > 0 ?
                        <div className='d-flex flex-column flex'>
                            <div className='items'>
                                {items.map((obj) => (
                                    <div key={obj.id} className='cartItem d-flex align-center mb-20'>
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
                                <button disabled={isLoading} onClick={onClickOrder} className='greenBtn'>
                                    Checkout <img src='/img/arrow.svg' alt='arrow'></img></button>
                            </div>
                        </div>
                        :
                        <Info
                            title={isOrserComplete ? "Place an order" : "Empty cart"}
                            description={isOrserComplete ? `Your order №${orderId} will be delivered soon` : "Add sneakers"}
                            image={isOrserComplete ? "/img/order.svg" : "/img/empty-cart.jpg"} />
                }

            </div>
        </div>
    )
}

export default Drawer