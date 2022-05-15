import React from 'react';
import bg from '../../assets/images/appointment.png'
import footerbg from '../../assets/images/footer.png'
import Button from '../Button';

const Footer = () => {
    return (
        <div>
            <div
                style={{
                    background: `url(${bg})`,
                    // backgroundColor: 'green'
                    backgroundSize: '100%',
                }}
                className="mt-16 text-center py-16"
            >
                <h1 className='text-center text-lg text-secondary font-bold'>Contact Us</h1>
                <h1 className='text-center text-white text-2xl lg:text-4xl mb-6'>Stay Connected With Us</h1>
                <div className='mx-auto w-100 lg:w-1/3 flex flex-col'>
                    <input type="text" placeholder="Type here" class="input p-2 m-1  input-bordered " />

                    <input type="text" placeholder="Type here" class="input  p-2 m-1 input-bordered " />

                    <textarea type="text" placeholder="Type here" class="input textarea h-20 p-2 m-1 input-bordered " />
                </div>
                <br />
                <Button className="w-1/4 mx-auto">Submit</Button>
            </div>
            <footer style={{
                background: `url(${footerbg})`,
                backgroundSize: 'cover'
            }}>
                <div class="footer p-10 sm:text-center ">
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>               
                </div>
                <footer class="footer footer-center p-4 text-base-content">
                        <div>
                            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                        </div>
                    </footer>

            </footer>
        </div>
    );
};

export default Footer;