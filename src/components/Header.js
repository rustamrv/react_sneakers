import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { onClickCart } = props
    return (
        <header className='d-flex justify-between align-center'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src="/img/logo.png" alt='Logo' />
                    <div>
                        <h3>REACT SNEAKERS</h3>
                        <p className='opacity-5'>Shop the best sneakers</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li onClick={onClickCart} className='mr-30 cu-p'>
                    <img width={18} height={18} src="/img/cart.svg" alt='Cart' />
                    <span>1205 UAH</span>
                </li>
                <li className='mr-20 cu-p'>
                    <Link to='/favorites'>
                        <img width={18} height={18} src="/img/favorite.svg" alt='Favorite' />
                    </Link>
                </li>
                <li><img width={18} height={18} src="/img/user.svg" alt='User' />
                </li>

            </ul>
        </header>
    )
}

export default Header