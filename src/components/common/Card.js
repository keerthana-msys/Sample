import { Component } from 'react';
import './Card.scss';
// import Label from './LabelComponent';

class Card extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="card box-shadow card-container">
            <div className="">
                <div className="card-body">
                    <div className="row">
                        <div className="col-9">{this.props.name || this.props.uname}</div>
                        <div className="col-3">{this.props.gender}</div>
                    </div>
                    <div className="row">
                        <div className="col-9">{this.props.email}</div>
                        <div className="col-3">{this.props.status}</div>
                    </div>
                </div>
                <div class="card-footer ">
                    <button className="btn btn-secondary" onClick={() => this.props.deleteUser(this.props.id)}>Delete User</button>
                </div>
            </div>
        </div>);
    }
}

export default Card;