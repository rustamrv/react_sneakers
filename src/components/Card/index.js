import React, { useState } from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'


const Card = ({ id, title, price, image, onAdd, onFavorite, favorited = false, loading = false }) => {
    const { isItemAdded } = React.useContext(AppContext)

    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickAdd = () => {
        onAdd({ id, title, price, image });
    }

    const onClickFavorite = () => {
        onFavorite({ id, title, price, image });
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            {
                loading ?
                    (
                        <ContentLoader
                            speed={2}
                            width={155}
                            height={250}
                            viewBox="0 0 155 250"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                        </ContentLoader>
                    )
                    : (
                        <>

                            <div className={styles.favorite} onClick={onClickFavorite}>
                                <img src={isFavorite ? '/img/like.svg' : '/img/unlike.svg'} />
                            </div>

                            <img width='100%' height={135} src={image} alt='Sneakers' />
                            <h5>{title}</h5>
                            <div className='d-flex justify-between align-center'>
                                <div className='d-flex flex-column'>
                                    <span>Price:</span>
                                    <b>{price} UAH</b>
                                </div>
                                <img
                                    className={styles.add}
                                    onClick={onClickAdd}
                                    src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-add.svg'}
                                    alt='add' />
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default Card;