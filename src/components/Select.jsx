import React from "react";



const Select = ({clickCity, state}) => {
    const generateId = () => Math.random().toString(36).substr(2, 10);
    const [value, setValue] = React.useState();
    const change = () => {
        clickCity(event.target.options[event.target.selectedIndex].dataset.index);
        setValue(event.target.value)
    }

    const opt = state.map((item, index) => <option data-index={index} key={generateId()}>{item.name}</option>)
    return (
        <div>
            <select value={value} onChange={change}>
                {opt}
            </select>
        </div>
    )
};

export default Select;