import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer() {
    
    const onAdd = (count) =>{
        alert(`Ud ha agregado ${count} items a su carrito`);
    }
    
    return (
        <>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;