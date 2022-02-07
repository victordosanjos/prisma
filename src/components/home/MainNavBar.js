import React from "react";
import NavBarLinks from "./NavBarLinks"
import { ColorNav } from "../../design/js/Navbar";
import { Texts } from "../../design/js/Home";


const MainNavBar = (props) => {
    return (
<ColorNav Color="defaultLightBlue" className="navbar navbar-expand-md navbar-dark darkModeNavBar">
    <div className="container-fluid">
        <a className="navbar-brand sticky-top" href="index.html">
            <img src={props.NavBarLogo} width="40" height="40" />
        </a>

        {/* Hamburguer mobile button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


        {/* Universal Nav Bar Links */}
            <NavBarLinks />

    </div>
</ColorNav>
    )
}

export default MainNavBar; 

export const LojaNavBar = (props) => {
    return (
<ColorNav Color="darkGrey" className="navbar navbar-expand-md navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand sticky-top" href="index.html">
            <img src={props.NavBarLogo} width="40" height="40" />
        </a>

        {/* Hamburguer mobile button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Universal Nav Bar Links */}
            <NavBarLinks />

    </div>
</ColorNav>
    )
}

export const ContatoNavBar = (props) => {
    return (
<ColorNav Color="gradientBlueDarkLight" className="navbar navbar-expand-md navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand sticky-top" href="index.html">
            <img src={props.NavBarLogo} width="40" height="40" />
        </a>

        {/* Hamburguer mobile button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Universal Nav Bar Links */}
            <NavBarLinks />

    </div>
</ColorNav>
    )
}