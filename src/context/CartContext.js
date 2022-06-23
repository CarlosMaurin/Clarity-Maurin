import React from 'react'
import {useState, createContext} from "react";


export const CartContext = createContext({});





function MyCartContext({children} ) {
    
    const [cart, setCart] = useState([]); //todo lo que tenga que ver con el carrito se incorpora a este array
    
    const isInCart = (id) =>{
        return cart.some(item => item.id === id);
    }
    
    const addItem = (producto, count) =>{
        const newProducto = {
            ...producto,
            count
        }
        if(isInCart(newProducto.id)){
            const findProduct = cart.find(item => item.id === newProducto.id);
            const productIndex = cart.indexOf(findProduct);
            // const auxArray = [...cart];
            // auxArray[productIndex].count += count;
            // setCart(auxArray);
            cart[productIndex].count += count
            setCart(cart);
            

        }else{
            setCart([...cart, newProducto]);
        }
    }

    const emptyCart = () =>{
        setCart([]);
    }

    const deleteItem = (id) =>{
        setCart(cart.filter(item => item.id !== id));

    }

    const getItemQuantity = () =>{
        return cart.reduce((prev, curr) => prev += curr.count, 0);
    }
    
    const getItemPrice = () =>{
        return cart.reduce((prev, curr) => prev += curr.precio * curr.count, 0);
        
    }
    
    return (
        <>
            <CartContext.Provider value={{isInCart, addItem, emptyCart, deleteItem, getItemQuantity, getItemPrice, cart}}>
            {children}
            </CartContext.Provider>
        </>
    )
}

export default MyCartContext