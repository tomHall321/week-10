import { useState } from "react";

const Die  = ({ sides }) => {
    const [ value, setValue ] = useState(1);
    const change = () => setValue(Math.floor(Math.random() * sides) + 1);

    return (
        <div 
            onClick={ change } 
            style={{
                height: '50px', 
                width: '50px', 
                backgroundColor: 'black', 
                color: 'white', 
                textAlign: 'center', 
                fontSize: '18px'}}>
            { value }
        </div>
    );
}

Die.defaultProps = {
    sides: 6,
};

export default Die;