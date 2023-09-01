import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className='itemList--containerProducts'>
            {products.map((p) =>

                <Item
                    key={p.name}
                    id={p.id}
                    img={p.img}
                    name={p.name}
                    description={p.mini}
                    price={p.price}
                />

            )

            }
        </div>
    )
}

export default React.memo(ItemList) 