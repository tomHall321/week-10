import { useState } from "react";

const List = () => {
    // controlled component
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.currentTarget.value);

    // items
    const [items, setItems] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setValue("");
        setItems([...items, value]);
    };

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    onChange={ handleChange } 
                    value={ value } 
                />
                <button>
                    Add
                </button>
            </form>
            <ul>
                { items.map((item, i) => (
                    <li key={ i }>{ item }</li>
                )) }
            </ul>
        </>
    );
}

export default List;