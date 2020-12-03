import { useState } from "react";

const StepCounter = ({ max, step }) => {
    const [ count, setCount ] = useState(0);
    const handleClickDecrement = () => setCount(count - (count > 0 ? step : 0));
    const handleClickIncrement = () => setCount(count + (count < max ? step : 0));

    return (
        <>
        <p>
            {count}
        </p>
        <button 
            onClick={handleClickDecrement}>
            -
        </button>
        <button 
            onClick={handleClickIncrement}>
            +
        </button>
    </>
    );
};

StepCounter.defaultProps = {
    max: 100,
    step: 5,
};

export default StepCounter;