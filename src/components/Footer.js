import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{marginTop:'40px', textAlign: "center"}}>
            <div>&copy; 2020</div>
            <Link to="/about">About Developer</Link>
        </footer>
    );
};

export default Footer;
