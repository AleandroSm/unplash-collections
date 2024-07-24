import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
        <header className='md:px-12 py-4 w-full'>
            <nav className='flex justify-between w-full'>
                <img src={logo} alt="" />
                <ul className='font-semibold text-sm'>
                    <li className='inline-block py-2 px-4 mr-2 md:mr-4 text-black bg-slate-400'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='inline-block text-slate-600 mr-2'>
                        < Link to="/collections" >Collections</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <hr />
        </>
    )
}