import {useState} from "react";

//pass colour default property
const Square = ({colour}) => {
    const [green, setGreen] = useState(true);
    const change = () => setGreen(!green);

    const background = green ? "green" : colour;
    //if green is true then set background to green otherwise to prop

    return (
        <div
            onClick={change}
            style={{
                height: 200,
                width: 200,
                background: background,
            }}
        />
    );
};

Square.defaultProps = {
    colour: "hotpink",
};

export default Square;