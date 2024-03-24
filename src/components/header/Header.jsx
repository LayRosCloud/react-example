import {Link, NavLink, useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <NavLink className='nav' to='/'>Home</NavLink>
            <NavLink className='nav' to='/login'>Authorization</NavLink>
            <NavLink className='nav' to='/about'>About</NavLink>
        </header>
    );
}

export default Header;
