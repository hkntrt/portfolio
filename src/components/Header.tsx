import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <div className="header" >
                <div>
                    <h1> Portfolio Website </h1>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/hakanturut/"> <FaLinkedin  color={"purple"} size={50} /> </a>
                    <a href="https://github.com/hkntrt"> <FaGithub  color={"purple"} size={50} /> </a>
                    <a href="https://twitter.com/hkntrt1"> <FaTwitter  color={"purple"} size={50} /> </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header