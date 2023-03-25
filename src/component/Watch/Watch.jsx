import React, { useEffect, useState } from 'react';
import Dail from '../Dail/Dail';

const Watch = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    useEffect(() => {
        console.log('Hallo', count)
    }, [count])
    return (
        <div>
            <h4>Watch: {count}</h4>
            <button onClick={increase}>Increase..</button>
            <Dail count={count}></Dail>
        </div>
    );
};

export default Watch;