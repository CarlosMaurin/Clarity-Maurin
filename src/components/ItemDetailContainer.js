import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { productos } from '../productos';



function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getProducto = new Promise((res, rej) =>{
            
            res(productos);

            // setTimeout(()=>{
            //     res(productos);
            // }, 2000)
            
            
        })
        
        getProducto
            .then((res) => {
                setProducto(res.find(obj => obj.id === parseInt(id)))})  //aqui va el find ===id parseInt
            .catch((error) =>{
                console.log(error)
            })
    
    }, [id])
    
    
    
    
    return (
        
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer