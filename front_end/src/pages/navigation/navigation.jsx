import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation.css';
import moreImage from './more.png';
import { publicRoutes, privateRoutes } from "./listNavigation";
import { useAuth } from '../../context/AuthContext';
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Navigation = () => {

    const { isAuth, logout, user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navigation'>
            <h2>Prod-Monitor</h2>
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
                                    <li key={path} onClick={handleClose}>
                                        <Link to={path} >{name}</Link>
                                    </li>
                                ))}

                                <li
                                    onClick={() => {
                                        logout();
                                        handleClose();
                                    }}
                                >
                                    <MdLogout />
                                    Logout
                                </li>

                                <p className='userName'>
                                    <FaRegUser />
                                    {user.full_name}
                                </p>
                            </>
                            : publicRoutes.map(({ path, name, icon }) => (
                                <li key={path} onClick={handleClose}>
                                    {icon}
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