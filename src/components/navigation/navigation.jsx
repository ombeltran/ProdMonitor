import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation.css';
import moreImage from './more.png';

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    const handleOpen = () => {
        setMenuOpen(true);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navigation'>
            {/* <button className='open_menu' onClick={handleOpen} >
                <img src="..\images\more.png" alt="" />
            </button> */}
            <div className="open_menu" onClick={handleOpen}>
                <img src={moreImage} alt="More" />
            </div>

            <nav className={`nav_bar ${menuOpen ? 'visible' : ''}`}>
                <button className='close' onClick={handleClose}>
                    X
                </button>

                <ul className='nav_list'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/reports">Reports</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}



export default Navigation;