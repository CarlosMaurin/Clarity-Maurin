import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
// import { productos } from '../productos';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "../components/ItemDetailContainer.css";



function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    




    useEffect(() => {
        

        /////////////////////////////////////////////////////////////////////////////////////
        //ESTO ESCRIBO SI QUIERO USAR UNA PROMESA CON UN JS CON UN ARRAY DE OBJETOS COMO DB//
        ////////////////////////////////////////////////////////////////////////////////////

        // const getProducto = new Promise((res, rej) =>{
            
        //     res(productos);

        //     setTimeout(()=>{
        //         res(productos);
        //     }, 2000)    
        // })
        // getProducto
        //     .then((res) => {
        //         setProducto(res.find(obj => obj.id === parseInt(id)))})  //aqui va el find ===id parseInt
        //     .catch((error) =>{
        //         console.log(error)
        //     })

        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        getDoc(itemRef)
        .then(snapshot => {
            setProducto({...snapshot.data(), id: snapshot.id})
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            setLoading(false);
        });
    



    
    }, [id])
    
    
    
    
    return (
        
        <>
            {loading ? 
                <div class="dot-wave">
                    <div class="dot-wave__dot mx-2"></div>
                    <div class="dot-wave__dot mx-2"></div>
                    <div class="dot-wave__dot mx-2"></div>
                    <div class="dot-wave__dot mx-2"></div>
                </div>
                :
                
                <ItemDetail producto={producto}/>                
                }        
            
        </>
    )
}

export default ItemDetailContainer