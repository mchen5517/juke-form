import React from 'react';
import { Link } from 'react-router';


const FilterInput = (props) => {


    return (
        <div>
            <input onChange={props.handleChange} />
        </div>
    );
}


export default FilterInput;
