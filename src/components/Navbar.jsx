import logo from '../assets/Logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();

    const isCollectionsActive = () => location.pathname.startsWith('/collections');

    const isHomeActive = () => !location.pathname.includes("collections");

    return (
        <>
            <header className='md:px-12 py-4 w-full'>
                <nav className='flex justify-between w-full'>
                    <img src={logo} alt="Logo" />
                    <ul className='font-semibold text-sm flex'>
                        <li
                            className={`inline-block py-2 px-4 mr-2 md:mr-4 text-black ${isHomeActive() ? 'bg-slate-400' : ''}`}
                        >
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li
                            className={`inline-block py-2 px-4 mr-2 text-black ${isCollectionsActive() ? 'bg-slate-400' : ''}`}
                        >
                            <NavLink to='/collections'>
                                Collections
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />
        </>
    );
};
 
