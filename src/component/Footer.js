import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedinIn  } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to='/about' className="link link-hover">About Me</Link> 
          <Link to='/contact' className="link link-hover">Contact</Link> 
         
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4">
        <a href='https://www.linkedin.com/in/khorshedul-alam/'><FaLinkedinIn className="fill-current" width="50" height="24" ></FaLinkedinIn> </a>
        <a href='https://github.com/khorshedjhoni'><FaGithub></FaGithub></a>
          
          </div>
        </div> 
        <div>
          <p>Copyright © 2022 - All right reserved by Khorshedul Alam</p>
        </div>
      </footer>
    );
};

export default Footer;