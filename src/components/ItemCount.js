import React, {useState} from 'react';
import '../components/ItemCount.css';


function ItemCount({initial, stock, onAdd}) {
    
    let [count, setCount] = useState(initial)
    
    const sumar = () =>{
        if(count < stock){
            setCount(count += 1);
        }
    }

    const restar = () =>{
        if(count > initial){
            setCount(count -= 1);
        }
    } 


    return (
        <>
            <div className='container-fluid mt-2 mb-4'>
                <div className='row d-flex justify-content'>
                    <div className='col-12 d-flex justify-content-center'>
                        <button onClick={(restar)} className="menos bg-dark">-</button>
                        <span className='contador'>{count}</span>
                        <button onClick={(sumar)} className="mas bg-dark">+</button>
                    </div>
                    <div className='col-12 d-flex justify-content-center mt-2'>
                        <button onClick={() => {onAdd(count); setCount(initial)}} className='add-button bg-dark'>Agregar al carrito</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount