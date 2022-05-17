import React from 'react';
import footerbg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div>
            
            <footer style={{
                background: `url(${footerbg})`,
                backgroundSize: 'cover'
            }}>
                <div className="footer  p-10 sm:text-center ">
                    <div className='text-center'>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className='text-center'>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='text-center'>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>               
                </div>
                <footer className="footer footer-center p-4 text-base-content">
                        <div>
                            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                        </div>
                    </footer>

            </footer>
        </div>
    );
};

export default Footer;