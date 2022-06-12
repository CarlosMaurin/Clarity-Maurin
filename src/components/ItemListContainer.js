import React from 'react';
// import ItemCount from './ItemCount';
import {useEffect, useState} from "react";
import ItemList from './ItemList';

function ItemListContainer() {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        const mostrarItems = new Promise ((res, rej) =>{
            setTimeout(() => {
                res([
                    {id: 1, img: "https://giovannijoyas.com.ar/tiendas/20943-tm_thickbox_default/anillo-sello-san-benito.jpg", titulo: "Anillo San Benito", material: "plata y oro", precio: 2500},
                    {id: 2, img: "https://tse2.mm.bing.net/th?id=OIP.k56mQyyTcnsM-3U9wZyKLAHaHa&pid=Api&P=0&w=154&h=154", titulo: "Reloj Montreal", material: "acero inoxidable", precio: 7000},
                    {id: 3, img: "https://argyor.com.mx/949-large_default/dije-de-oro-14k-arbol-de-la-vida-brillo-mate-248400097.jpg", titulo: "Dije Arbol de la Vida", material: "Alpaca", precio: 3300},
                    {id: 4, img: "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7506237962065.jpg", titulo: "Anteojos Aviador Zero", material: "Grafito", precio: 6460}
                ]);
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