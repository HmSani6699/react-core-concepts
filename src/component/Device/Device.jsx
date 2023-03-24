import React from 'react';
import DeviceDetail from '../DeviceDetails/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <DeviceDetail details={props.details}></DeviceDetail>
        </div>
    );
};

export default Device;