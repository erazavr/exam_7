import React from 'react';

const Order = (props) => {
    const generateItems = () => {
        let arrFood = [];
        for (let i = 0; i < props.items.length;i++) {
            for (let k = 0; k < props.items[i].count; k++) {
                arrFood.push(
                    <div className='div'>
                        {props.items[i].name}
                        <span>X{props.items[i].count}</span>
                        <span>{props.items[i].price}</span>
                        <button onClick={()=>props.remove(props.items[i])}>X</button>
                    </div>
                )
            }
        }
        return arrFood;
    };
    return (
        <div className='order'>
            <h4>Order Details</h4>
            <p>Order is empty!</p>
            <p>Please add some items!</p>
            {generateItems()}
            <p>Total price: {props.totalPrice} KGS</p>
        </div>
    );
};

export default Order;