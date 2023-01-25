import React from 'react';
import {add, multiply, subtract, divide} from '../Calculator';
function List(){
    return(
        <div>
        <h1>My Calculator</h1>
        <ul>
            <li>{add(23,5)}</li>
            <li>{subtract(51,40)}</li>
            <li>{multiply(2,5)}</li>
            <li>{divide(15,5)}</li>
        </ul>
        </div>
    );
}

export default List;