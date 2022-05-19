import React, { useEffect, useState } from 'react'
import styles from './Card.module.scss'


const Card = ({ title, price, image, onAdd, onFavorite }) => {

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickAdd = () => {
        if (!isAdded) {
            onAdd({ title, price, image });
        }
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        if (!isFavorite) {
            onFavorite({ title, price, image, });
        }
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/like.svg' : '/img/unlike.svg'} />
            </div>

            <img width={133} height={112} src={image} alt='Sneakers' />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b>{price} UAH</b>
                </div>
                <img className={styles.add} onClick={onClickAdd} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-add.svg'} alt='add' />
            </div>
        </div>
    )
}

export default Card;