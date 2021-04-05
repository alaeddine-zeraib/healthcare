import React, { Component } from 'react'
import { connect } from "react-redux";
import { FoodActions } from "../Redux/FoodActions";

class FoodItems extends Component{
    render(){
        console.log('this.props', this.props);
        return (
            <div>
                <h2 className="text-center">Food Items</h2>
                <ul className="list-group">
                    {this.props.grocery.map((item) => {
                        return (
                            <li key={item.id} className="list-group-item">
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        grocery: state
    }
}

export default connect(mapStateToProps, { FoodActions })(FoodItems);
