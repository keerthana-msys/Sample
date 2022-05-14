import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../../redux';
import { Navigate } from 'react-router-dom';

import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import RadioField from '../common/RadioField';

const GENDER = [{
    label: "Select Gender",
    value: ""
},{
    label: "Male",
    value: "Male"
}, {
    label: "Female",
    value: "Female"
}, {
    label: "Other",
    value: "Other"
}];

const STATUS = [{
    label: "Active",
    value: 'Active'
}, {
    label: "Inactive",
    value: 'In Active'
}]

class CreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            uname: "",
            email: "",
            gender: "", 
            status: '',
            redirectToHome: false
        };
    }   

    handleChangeEvent = (event) => {
        this.setState({[event.target.name]: event.target.value
        });
    }    

    onSubmit = () => {
        let payload = {
            id: this.state.id,
            uname: this.state.uname,
            email: this.state.email,
            gender: this.state.gender,
            status: this.state.status
        }
        this.props.addNewUser(payload);
        this.setState({redirectToHome: true});
    };

    render(){
        let { id, uname, email, gender, status } = this.state;
        if(this.state.redirectToHome){
            return <Navigate to="/" />
        } else{
            return (<div>
                <InputField label="ID" name="id" id="id" type="number" value={id} placeholder="Id" handleChangeEvent={this.handleChangeEvent} />
                <InputField label="User Name" name="uname" id="name" type="text" value={uname} placeholder="Name" handleChangeEvent={this.handleChangeEvent} />
                <InputField label="Email" name="email" id="email" type="email" value={email} placeholder="Email Address" handleChangeEvent={this.handleChangeEvent} />
                <SelectField label="Gender" name="gender" id="gender" value={gender} options={GENDER} handleChangeEvent={this.handleChangeEvent} />
                <RadioField label="Status" name="status" id="status" value={status} options={STATUS} handleChangeEvent={this.handleChangeEvent} />
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>)
        }
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        ...ownProps
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (state) => dispatch(addNewUser(state))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);