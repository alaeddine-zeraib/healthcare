import React, { Component } from 'react'
import { connect } from "react-redux";
import { AddFoodById } from "../Redux/FoodActions";

class FoodItems extends Component{
    render(){
        console.log('this.props', this.props);
        return (
            <div>
                <h2 className="text-center">Food Items</h2>
                <ul className="list-group">
                    {this.props.grocery.map((item) => {
                        return (
                            <li key={item.id} 
                                className="list-group-item"
                                onClick={() => this.props.AddFoodById(item.id)}>
                                    <b>{item.name}</b> - 
                                    <span className="badge bg-warning text-dark">{item.weight} grams</span> - 
                                    <span className="badge bg-info text-dark">{item.calories} calories</span> 
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        grocery: state.grocery
    }
}

export default connect(mapStateToProps, { AddFoodById })(FoodItems);
