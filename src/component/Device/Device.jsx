import React from 'react';
import DeviceDetail from '../DeviceDetails/DeviceDetail';
import Watch from '../Watch/Watch';

const Device = (props) => {
    return (
        <div style={{ border: '2px solid red', padding: '10px' }}>
            <h1>Name: {props.name}</h1>
            <DeviceDetail details={props.details}></DeviceDetail>
            <Watch></Watch>
        </div>
    );
};

export default Device;