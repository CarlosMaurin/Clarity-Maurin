import React from 'react';
import "../components/CategoriaContainer.css";
import {Link, useParams} from 'react-router-dom';
// import {collection, getDocs, getFirestore} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";



function CategoriaContainer() {

    const [catContainer, setCatContainer] = useState([]);
    const {categoryid} = useParams();

    useEffect(() => {
        
        const db = getFirestore();
        const catCollection = collection(db, "categoria");

        getDocs(catCollection).then(snapshot =>{
            setCatContainer(snapshot.docs.map(doc =>({...doc.data(), id: doc.id})));
        })
        .catch( error => {
            console.log(error)})

    }, [categoryid])
    


    return (
        <>
            <div className='container-fluid' >
                <div className='row cat-alianzas bg-dark' >
                    <div className='col-12' >
                        <h1 className='text-light text-center' >CATEGORIAS DE PRODUCTOS </h1>
                    </div>
                </div>
            </div>

            {catContainer.map(cat => {
                return(
                    <div key={cat.id} >
                        <div className='container-fluid img-cat d-flex flex-column justify-content-center' style={{backgroundImage: `url(${cat.img1})`}}>
                            <div className='row img-alianzas d-flex flex-column' >
                                <div className='col-12 contenido-alianzas ps-0' >
                                    <h2>{cat.titulo} </h2>
                                    <p>{cat.descripcion} </p>
                                    
                                </div>
                                <div className="col-6">
                                    <button className='boton-alianzas'>
                                    <Link to={`/categoria/${cat.nombre}`} className="text" >Ver más</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            
        </>
    )
}

export default CategoriaContainer