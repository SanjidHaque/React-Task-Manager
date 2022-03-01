import React from 'react';
import {Link} from "react-router-dom";

const AboutDeveloper = () => {
    return (
        <div style={{paddingTop:'20px', textAlign: "center"}}>
            <div>
                <h5>Sk. Sanjidul Haque</h5>
                <a href="https://github.com/SanjidHaque">Github</a>
                | <a href="https://linkedin.com/in/sksanjidulhaque">LinkedIn</a>
            </div>
            
            <div>
                <Link to="/">Go back</Link>
            </div>
        </div>
    );
};

export default AboutDeveloper;
