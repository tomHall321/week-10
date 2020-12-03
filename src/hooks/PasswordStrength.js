import { useState } from "react";

const inputColour = length =>{

    if (length === 0){
        return {};
    }
    if (length < 9) {
        return {background: "red"}; 
    } 
    if (length < 16) {
        return {background: "orange"};
    }
    return {background: "green"};
}

const PasswordStrength = () => {
    const [ value, setValue ] = useState("");
    
    const changePasswordInput = (e) => setValue(e.currentTarget.value);

    return (
        <div>
            <input
                style = { inputColour(value.length) }
                onChange = { changePasswordInput }
                value = { value }
            />
        </div>
    );
    
};

export default PasswordStrength;