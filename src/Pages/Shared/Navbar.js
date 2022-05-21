import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading'

const Navbar = () => {
    
    const [user, loading] = useAuthState(auth);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        {user ?
            <li>
                <>
                    <label htmlFor="logout-modal" className="modal-button bg-white">Logout</label>
                </>
            </li>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>
    if (loading) {
        return <Loading />
    }
    return (
        <div className="sticky top-0 z-[900]">
            <input type="checkbox" id="logout-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg text-center">Are you sure want to logout?</h3>
                    <div className="modal-action flex justify-evenly">
                        <label htmlFor="logout-modal" className="btn" onClick={()=>signOut(auth)}>Yes</label>
                        <label htmlFor="logout-modal" className="btn btn-secondary">Cancel</label>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Dental Care</Link>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal p-0 mr-6">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;