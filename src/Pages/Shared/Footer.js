import React from 'react';
import facebook from '../../images/icon/icons8-facebook-30.png'
import instagram from '../../images/icon/icons8-instagram-30.png'
import twitter from '../../images/icon/icons8-twitter-30.png'

const Footer = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Blog</a>
            </div>
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a><img src={facebook} alt="" /></a>
                    <a><img src={twitter} alt="" /></a>
                    <a><img src={instagram} alt="" /></a>
                </div>
            </div>
            <div>
                <p>Copyright © {year} - All right reserved by AUTO PARTS Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;