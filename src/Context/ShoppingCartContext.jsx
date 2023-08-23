import { createContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom'


export const CartContext = createContext({ cart: [] })
const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState(carritoInicial)
    const addToCart = (product, quantity) => {
        const productAdd = { ...product, quantity };
        const newCart = [...cart]
        const isInCart = cart.find((item) => item.id == product.id);
        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            newCart.push(productAdd)
        }
        setCart(newCart);

    }
    const quantityInCart = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0)
    }
    const totalQuantity = () => {
        return cart.reduce((acc, product) => acc + product.quantity * product.price, 0)
    }
    const deleteCart = () => {
        setCart([]);
    }

    const removeProduct = (item) => {
        const updatedCart = cart.map((product) => {
            if (product.id === item) {
                if (item.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                }

                return null;
            }
            return product;
        }).filter((product) => product !== null);
        setCart(updatedCart);
    };
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            quantityInCart,
            totalQuantity,
            deleteCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default ShoppingCartProvider