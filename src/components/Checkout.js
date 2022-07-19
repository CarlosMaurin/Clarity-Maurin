import React from 'react';
import { useState, useContext} from "react";
import { CartContext } from "../context/CartContext";
import {addDoc, collection, getFirestore, getDocs} from 'firebase/firestore';
import "../components/Checkout.css";
import {Formik, Form, Field } from "formik";
import {Link} from 'react-router-dom';


function Checkout() {

    const {cart, getItemPrice, limpiarCart} = useContext(CartContext);
    const [idCompra, setIdCompra] = useState("");
    // const [contacto, setContacto] = useState("");
    // const [celular, setCelular] = useState("");
    // const [email, setEmail] = useState("");
    const [showTicket, setShowTicket] = useState(true);
    const db = getFirestore();
    const ordenCollection = collection(db, "ordenes");
    

    // useEffect(() => {
        
    //     getDocs(ordenCollection)
    //             .then(snapshot =>{
    //                 setOrdenCompra(snapshot.docs.map(doc =>({...doc.data()})));
    //             })
    //             .catch( error => {
    //                 console.log(error)})
    // }, [])
    

    

    // function handleClick(){
    //     const orden = {
    //         cliente:{contacto, celular, email},
    //         cart,
    //         Total: getItemPrice()         
    //     }



    // }
    return (
        <>
            {showTicket ? 
            
            <Formik
                initialValues={{
                    nombre: "",
                    email: "",
                    celular: ""
                }}
                onSubmit={(valores, {resetForm}, limpiarCart) =>{
                    // console.log(valores.celular);
                    resetForm();
                    console.log("formulario enviado");
                    const orden = {
                        valores,
                        cart,
                        Total: getItemPrice()         
                    }
                    addDoc(ordenCollection, orden).then(({id})=>{
                        setIdCompra(id)
                    } )
                    .then(setShowTicket(false));
                }} 

                //VALIDACION NOMBRE//
                validate={(valores)=>{
                    let errores={};
                    if(!valores.nombre){
                        errores.nombre="* Por favor ingresar un nombre";
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre= "* El nombre solo debe contener letras y espacios"
                    }


                //VALIDACION EMAIL//

                    if(!valores.email){
                        errores.email="* Por favor ingresar un e-mail";
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email= "* Por favor ingresar un email válido"
                    }

                //VALIDACION CELULAR//
                    if(!valores.celular){
                        errores.celular = "* Por favor ingresar un número de celular"
                    }else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.celular)){
                        errores.celular="* Por favor ingresar un número de celular válido"
                    }

                    return errores;
                }}


            
            >

                { ({values, handleChange, handleBlur, errors, touched} )=>(
                    <Form className='container-fluid container-checkout'>
                        <div className='row row-form'>
                            <div className='col-5 col-form'>
                                <h3 className='text-center'>DATOS PERSONALES</h3>
                                <div className='d-flex flex-column'>

                                    <div className='d-flex flex-column mb-4'>
                                        <label htmlFor='nombre'>Nombre completo</label>
                                        <Field
                                        className="form-control"
                                        type="text" 
                                        id='nombre' 
                                        name='nombre' 
                                        placeholder='Ej: Lionel Andrés Messi' 
                                        
                                        />
                                    {touched.nombre && errors.nombre && <div className='validacion'>{errors.nombre} </div>}
                                    </div>
                                    <div className='d-flex flex-column mb-4'>
                                        <label htmlFor='email'>Email</label>
                                        <Field
                                        className="form-control"
                                        type="email" 
                                        id='email' 
                                        name='email' 
                                        placeholder='Ej: lionelandresmessi@messi.com' 
                                        />
                                        {touched.email && errors.email && <div className='validacion'>{errors.email} </div>}
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='celular'>Celular</label>
                                        <Field
                                        className="form-control"
                                        type="cel" 
                                        id='celular' 
                                        name='celular' 
                                        placeholder='(381) 154123123'
                                        />
                                        {touched.celular && errors.celular && <div className='validacion'>{errors.celular} </div>}
                                    </div>
                                    <button type='submit' className='mt-3 mb-3 mx-auto confirmar-compra btn' onClick={()=>{limpiarCart()}}>Confirmar compra</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                
                
                
                )}
            </Formik>
            :
            
            <div className='container-fluid container-orden d-flex flex-column align-items-center py-5'>
                <h1>CHECKOUT</h1>
                <div className='row'>
                    <div className='col-12 col-orden mx-auto py-3 px-5'>
                        <h3>La orden fue registrada exitosamente con el siguiente id: </h3>
                        <p className='text-center my-5'>{idCompra} </p>
                        <div className='d-flex justify-content-center'>
                            <Link to="/Home">
                                <button className="learn-more mt-3">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Voler a Inicio</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            }





{/* 

            {showTicket ? 
            <div className='container-fluid container-checkout' >
                <div className='row row-form'>
                    <div className='col-5 col-form'>
                        <h3 className='text-center'>DATOS PERSONALES</h3>
                        <div className='d-flex flex-column'>
                            <input onChange={(e)=> setContacto(e.target.value)} placeholder='Nombre'></input>
                            <input onChange={(e)=> setEmail(e.target.value)} placeholder='E-mail'></input>
                            <input onChange={(e)=> setCelular(e.target.value)} placeholder='Celular'></input>
                            <button onClick={()=> handleClick()} className='mt-5 mb-3'>Confirmar compra</button>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <div>
                <p>hola</p>
            </div>
            }
            
             */}
            
            
            <div></div>
            <div></div>
            <div></div>
        </>
    )
}

export default Checkout