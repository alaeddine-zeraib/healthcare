import React from 'react'
import FoodItems from './FoodItems';
import FoodBag from './FoodBag';
import FoodStats from './FoodStats';

export default function Grocery() {
    return (
        <div className="row">
            <div className="col-sm-4">
                <FoodItems />
            </div>
            <div className="col-sm-4">
                <FoodBag />
            </div>
            <div className="col-sm-4">
                <FoodStats />
            </div>
        </div>
    )
}
