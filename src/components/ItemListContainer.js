import React from 'react';
// import ItemCount from './ItemCount';
import {useEffect, useState} from "react";
import ItemList from './ItemList';

function ItemListContainer() {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        const mostrarItems = new Promise ((res, rej) =>{
            setTimeout(() => {
                fetch("productos.json")
                .then(res=> res.json())
                .then(res=>setItems(res.items))
                .catch(error=>console.log(error));
            }, 2000);
        });
    

        mostrarItems
            .then((res)=>{
                setItems(res);
            })
            .catch((error) =>{
                console.log(error);
            })
    }, [])
    

    // const onAdd = (count) =>{
    //     alert(`Ud ha agregado ${count} items a su carrito`);
    // }
    
    return (
        <>
            <ItemList items={items}/>
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
            
        </>
    )
}

export default ItemListContainer;