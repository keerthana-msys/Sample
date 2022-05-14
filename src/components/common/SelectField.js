import React from 'react';

SelectField.defaultProps = {
    name: '',
    value: '',
    options: [],
    id:'',
    label: ''
};


function SelectField(props) {
    return (<>
        <label className="form-label" htmlFor={props.id}>{props.label}</label>
        <select className="form-select input-field" value={props.value} name={props.name} onChange={(e) => props.handleChangeEvent(e)}>
            {props.options.map(option => {
               return <option key={option.value} value={option.value}>{option.label}</option>
            })}
        </select>
    </>);
}

export default SelectField;