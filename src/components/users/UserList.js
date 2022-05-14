import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, fetchUserList } from '../../redux';
import Card from '../common/Card';
import Header from '../Header';

import "./user-list.scss";

class UserList extends React.Component {

    componentDidMount(){
        this.props.fetchUserList();
    }

    deleteUser = (id) => {
        this.props.deleteUser(id);
    }

    render(){
        let { users } = this.props.users;
       return (<>
            <Header />
            <div className="list-container">    
                {users.map(user => {
                    return <Card className="list-item" key={user.id} {...user} deleteUser={this.deleteUser} />
                })}            
            </div>
        </>)
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

const mapDispatchToProps = dispatch => {
    return { 
        fetchUserList: () => dispatch(fetchUserList()),
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);