import { useState } from "react";

const RollCall = ({ names }) => {
    const [ index, setIndex ] = useState(0);
   
    const handleClick = () => setIndex(index === names.length - 1 ? 0 : index + 1);
   
    return (
        <>
            <p>{ names[index] }</p>
            <button onClick={ handleClick }>Next</button>
        </>
    );
    
};

export default RollCall;