import React from 'react'

const Card = () => {
    return (
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
    )
}

export default Card;