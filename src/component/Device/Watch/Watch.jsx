import React, { useState } from 'react';

const Watch = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>Watch: {count}</h4>
            <button >Increase..</button>
        </div>
    );
};

export default Watch;