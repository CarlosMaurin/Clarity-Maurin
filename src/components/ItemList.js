import React from 'react'
import Item from './Item'
import "../components/ItemList.css";

function ItemList({items}) {
        
    
    return (
        <>
            <div className='container-fluid main-container'>    
                <div className='row mt-5 d-flex justify-content-center'>
                            
                        {items.map(item => <Item key={item.id} item={item} />)}    
                    
                </div>
            </div>

        
        </>
    )
}

export default ItemList;