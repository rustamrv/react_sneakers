import React from 'react'

const Header = (props) => {
    const { onClickCart } = props
    return (
        <header className='d-flex justify-between align-center'>
            <div className='d-flex align-center'>

                <img width={40} height={40} src="/img/logo.png" />
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p className='opacity-5'>Shop the best sneakers</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li onClick={onClickCart} className='mr-30 cu-p'>
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span>1205 UAH</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" />
                </li>

            </ul>
        </header>
    )
}

export default Header