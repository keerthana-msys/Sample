RadioField.defaultProps = {
    name: '',
    type: 'radio',
    options: [],
    id: '',
    label: ''
}

function RadioField(props){
    return (<>
        <label className="form-label status-radio-input" htmlFor={props.id}>{props.label}</label>
        <div className="mb-3 input-field" onChange={(e) => props.handleChangeEvent(e)}>
            {props.options.map(option => {
                return (
                    <div className="form-check input-radio-inline" key={option.value}>
                        <input className="form-check-input" type={props.type} name={props.name} value={option.value} id={props.id}/>
                        <label className="form-check-label" htmlFor={props.id}>
                            {option.label}
                        </label>
                    </div>
                    )
                })}
            </div>
    </>);
}

export default RadioField;