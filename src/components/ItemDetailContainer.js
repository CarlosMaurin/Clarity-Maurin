import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';




function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        const getItem = new Promise((res, rej) =>{
            
            setTimeout(()=>{
                res({id: 3, img: "https://argyor.com.mx/949-large_default/dije-de-oro-14k-arbol-de-la-vida-brillo-mate-248400097.jpg", titulo: "Dije Arbol de la Vida", material: "Alpaca", precio: 3300})
            }, 2000)
            
            
        })
        
        getItem
            .then((res) => {
                setProducto(res)})
            .catch((error) =>{
                console.log(error)
            })
    
    }, [])
    
    
    
    
    return (
        
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer