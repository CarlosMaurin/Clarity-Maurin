import React from 'react';
// import ItemCount from './ItemCount';
import {useEffect, useState} from "react";
import { productos } from '../productos';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

function ItemListContainer() {
    
    const [items, setItems] = useState([]);
    const {categoryid} = useParams();

    
    useEffect(() => {
        
        // const mostrarItems = new Promise ((res, rej) =>{     ESTO ES LO QUE PONGO CUANDO USO UN FETCH
        //     setTimeout(() => {
        //         fetch("productos.json")
        //         .then(res=> res.json())
        //         .then(res=>setItems(res.items))
        //         .catch(error=>console.log(error));
        //     }, 2000);
        // });
        const mostrarItems = new Promise ((res, rej) =>{
            setTimeout(() => {
                res(productos)
            }, 2000);
        });

        mostrarItems
            .then((res)=>{

                setItems(res);
                if(categoryid){

                    setItems(res.filter(obj => obj.categoria === categoryid));  //aqui va el filter//
                }else{
                    setItems(res);
                }

                
            })
            .catch((error) =>{
                console.log(error);
            })
    }, [categoryid])
    
    

    

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