import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const redirectFunc = () => {
        navigate('/createUser');
    };
    
    return (<button className="btn btn-primary action-btn" onClick={redirectFunc}>Create User</button>);   
}

export default Header;