import { useState } from "react";

const Counter = ({ max }) => {
    const [ count, setCount ] = useState(0);
    const handleClickDecrement = () => setCount(count - (count > 0 ? 1 : 0));
    const handleClickIncrement = () => setCount(count + (count < max ? 1 : 0));

    return (
        <>
        <p>
            { count }
        </p>
        <button 
            onClick={ handleClickDecrement }>
            -
        </button>
        <button 
            onClick={ handleClickIncrement }>
            +
        </button>
    </>
    );
};

Counter.defaultProps = {
    max: 100,
};

export default Counter;