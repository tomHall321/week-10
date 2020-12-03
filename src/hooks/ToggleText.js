import { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
    const [ isInitial, setInitial ] = useState(true);
    const change = () => setInitial(!isInitial);

    return (
    <>
        <p>
            { isInitial ? initial : alternate }
        </p>
        <button 
            onClick={ change }>
            Hello or World
        </button>
    </>
    );
};

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World",
};

export default ToggleText;