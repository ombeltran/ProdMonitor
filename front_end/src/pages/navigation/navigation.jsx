import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation.css';
import moreImage from './more.png';
import { publicRoutes, privateRoutes } from "./listNavigation";
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {

    const { isAuth, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navigation'>
            <div className="open_menu" onClick={handleOpen}>
                <img src={moreImage} alt="More" />
            </div>

            <nav className={`nav_bar ${menuOpen ? 'visible' : ''}`}>
                <button className='close' onClick={handleClose}>
                    X
                </button>

                <h1>Prod-Monitor</h1>

                <ul className='nav_list'>
                    {
                        isAuth ?
                            <>
                                {privateRoutes.map(({ path, name }) => (
                                    <li key={path}>
                                        <Link to={path} >{name}</Link>
                                    </li>
                                ))}

                                <li
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    Logout
                                </li>

                            </>
                            : publicRoutes.map(({ path, name }) => (
                                <li key={path}>
                                    <Link to={path} >{name}</Link>
                                </li>
                            ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;