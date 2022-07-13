import Card from '../components/Card';

function Home({ items, searchValue, setSearchValue, onSearchInput, onAddToFavorite, onAddToCart }) {
    return (
        <div className='content p-40'>
            <div className='mb-40 d-flex align-center justify-between'>
                <h1>{searchValue ? `Search by "${searchValue}"` : "All sneakers"} </h1>
                <div className='search-block d-flex'>
                    <img src='/img/search.svg' alt='Search' />
                    {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src='/img/btn-remove.svg' alt='Clear' />}
                    <input onChange={onSearchInput} value={searchValue} placeholder='Search...' />
                </div>
            </div>

            <div className='d-flex flex-wrap'>
                {
                    items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index} 
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                onAdd={(obj) => onAddToCart(obj)}
                                {...item}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Home