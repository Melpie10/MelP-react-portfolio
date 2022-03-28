import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialFollow() {
    return (
    <div className="social-container">
        <h3>Find me at:</h3>
        <a href="https://github.com/Melpie10"
        className= "social github">
            <FaGithub size= "3em" />
        </a>
        <a href="linkedin.com/in/melanypietrowski"
        className= "social linkedin">
            <FaLinkedin size= "3em"/>
        </a> 
    </div>
    );
}
