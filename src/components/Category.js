import React from 'react'
import {collection, getDocs, getFirestore } from "firebase/firestore";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Category() {
  
  

  const [categoria, setCategoria] = useState([]);


  useEffect(() => {
    
    const db = getFirestore();
    const categoryCollection = collection(db, "categoria");
  
    getDocs(categoryCollection).then(snapshot =>{
        setCategoria(snapshot.docs.map(doc =>({...doc.data(), id: doc.id})));
    })
    .catch( error => {
    console.log(error)});
  }, [])
  
  
  return (
    <>
    {categoria.map((cat)=> {
      return(
          <div key={cat.id}>
          <li><Link to={`/categoria/${cat.nombre}`} className="dropdown-item">{cat.label} </Link></li>
          </div>
      )
    })}
    
    </>
  )
}

export default Category;