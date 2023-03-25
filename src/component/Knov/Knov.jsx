import React from 'react';

const Knov = (props) => {
    return (
        <div style={{ border: '2px solid blue' }}>
            <p>Author two count: {props.count}</p>
        </div>
    );
};

export default Knov;