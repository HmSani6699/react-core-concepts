import React from 'react';
import Knov from '../Knov/Knov';

const Dail = (props) => {
    return (
        <div style={{ border: '2px solid gray' }}>
            <p>author count:{props.count}</p>
            <Knov count={props.count}></Knov>
        </div>
    );
};

export default Dail;