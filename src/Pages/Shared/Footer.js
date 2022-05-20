import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10"> 
            <div className='footer'>
                <div>
                    <span className="footer-title uppercase">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title uppercase">Our Health</span>
                    <Link to='/'className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/'className="link link-hover">Cavity Filling </Link>
                    <Link to='/'className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title uppercase">Our address</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © {year} - All right reserved by Dental Care</p>
            </div>
        </footer>
    );
};

export default Footer;