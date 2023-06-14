import React from "react";
import logo from "../images/reactjs-icon 1.png"

export default function Navbar(props) {

    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img className="nav-logo" alt="logo" src={logo} />
            <h1>ReactFacts</h1>
            <h3>React Course - Project 1/ Update 3</h3>

            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider" onClick={props.toggleDarkMode}>
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}