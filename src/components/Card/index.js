import React from 'react'
import styles from './Card.module.scss'


const Card = (props) => {
    const { title, price, image } = props

    const onClickButton = () => {
        alert(title)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>   
                <img src="/img/heart-unlike.svg" />
            </div>

            <img width={133} height={112} src={image} alt='Sneakers' />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b>{price} UAH</b>
                </div>
                <button className='button' onClick={onClickButton} >
                    <img width={11} height={11} src='/img/add.svg' alt='add' />
                </button>
            </div>
        </div>
    )
}

export default Card;