import React from 'react';
import {ITEMS as items} from '../ITEMS/ITEMS'
const Items = (props) => {
    return (
        items.map((item,index) => (
            <div  className='item-inner' key={index}>

                <button className='item-btn' onClick={()=> props.food(item)}>
                    <img src={item.img} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <span>Price: {item.price} KGS</span>
                </button>
            </div>
        ))

    );
};

export default Items;