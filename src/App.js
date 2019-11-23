import React, {Component} from 'react';
import Items from "./components/Items/Items";
import Order from "./components/Order/Order";

import './App.css'

class App extends Component {
    state = {
        items: [
            {name: 'Hamburger', count: 0, price: 80},
            {name: 'Cheeseburger', count: 0, price: 90},
            {name: 'Fries', count: 0, price: 45},
            {name: 'Coffee', count: 0, price: 70},
            {name: 'Tea', count: 0, price: 50},
            {name: 'Cola', count: 0, price: 40},
        ],
        totalPrice: 0,
    };
    addFood = count => {
        const items = [...this.state.items];
        const itemsIndex = items.findIndex(t => t.name === count.name);
        items[itemsIndex].count++;
        let totalPrice = this.state.totalPrice;
        totalPrice += count.price;
        this.setState({items,totalPrice});
    };
    removeFood = name => {
        const items = [...this.state.items];
        const itemsIndex = items.findIndex(t => t.name === name.name);
        items[itemsIndex].count--;
        let totalPrice = this.state.totalPrice;
        totalPrice -= name.price;
        this.setState({items,totalPrice});
    };
    render() {
        return (
            <div className='mainBlock'>
                <Order
                    items={this.state.items}
                    totalPrice = {this.state.totalPrice}
                    remove={this.removeFood}
                />

                <div className='item'>
                <h4>Add items</h4>
                <Items
                    food={this.addFood}
                    itemA={this.state.items}/>

                </div>
            </div>
        );
    }
}

export default App;