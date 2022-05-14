import React from 'react';

InputField.defaultProps = {
    label: '',
    name: '',
    type: 'text',
    placeholder: '',
    value: '',
    id: ""
};

function InputField(props) {
    return (
        <div className="mb-3 input-field">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <input className="form-control" id={props.id} name={props.name} type={props.type} value={props.value} placeholder={props.placeholder} onChange={(e) => props.handleChangeEvent(e)} />
        </div>
    );
}

export default InputField;