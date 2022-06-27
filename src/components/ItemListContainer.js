import React from 'react';
// import ItemCount from './ItemCount';
import {useEffect, useState} from "react";
// import { productos } from '../productos';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemListContainer() {
    
    const [items, setItems] = useState([]);
    const {categoryid} = useParams();

    
    useEffect(() => {
        
        ////////////////////////////////////////////
        //ESTO ES LO QUE PONGO CUANDO USO UN FETCH//
        ///////////////////////////////////////////


        // const mostrarItems = new Promise ((res, rej) =>{     
        //     setTimeout(() => {
        //         fetch("productos.json")
        //         .then(res=> res.json())
        //         .then(res=>setItems(res.items))
        //         .catch(error=>console.log(error));
        //     }, 2000);
        // });


        /////////////////////////////////////////////////////////////////////////////
        //ESTO ES LO QUE ESCRIBO CUANDO USO PROMESAS Y UN JS CON UN OBJETO DE ITEMS//
        ////////////////////////////////////////////////////////////////////////////


        // const mostrarItems = new Promise ((res, rej) =>{
        //     setTimeout(() => {
        //         res(productos)
        //     }, 2000);
        // });

        // mostrarItems
        //     .then((res)=>{

        //         setItems(res);
        //         if(categoryid){

        //             setItems(res.filter(obj => obj.categoria === categoryid));  //aqui va el filter//
        //         }else{
        //             setItems(res);
        //         }

                
        //     })
        //     .catch((error) =>{
        //         console.log(error);
        //     })



        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        
        
        if(categoryid){
            const q = query(itemsCollection, where("categoria", "==", categoryid));

            getDocs(q)
            .then((snapshot) => {
                setItems(
                    snapshot.docs.map(doc =>({...doc.data(), id: doc.id}))
                )
                
            })
            .catch( error => {
                console.log(error)});
        }else{
            getDocs(itemsCollection).then(snapshot =>{
                setItems(snapshot.docs.map(doc =>({...doc.data(), id: doc.id})));
            })
            .catch( error => {
                console.log(error)})
            // .finally(()=>{
            //     setLoading(false),
            // })
        }
        
        
        







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