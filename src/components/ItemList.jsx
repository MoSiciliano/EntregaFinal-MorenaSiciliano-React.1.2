import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className='itemList--containerProducts'>
            {products.map((p) =>

                <Item
                    key={p.id}
                    id={p.id}
                    img={p.img}
                    name={p.name}
                    description={p.description}
                    price={p.price}
                />

            )

            }
        </div>
    )
}

export default ItemList