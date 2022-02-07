import React from "react";
import { css, styled } from "@stitches/react";
import { SuperHero } from "../../design/Home";

const BigHero = (props) => {
    return (
        <SuperHero className="container-fluid vh-100">
        <br/>
        <br/>
        <br/>
        <img className="img-fluid" src={props.bgHero} alt="logo prisma branco" width="10%" height="17%"/>
        <h1 className="main-title ttu ">PRISMA</h1>

        <div className="server-connect server-information">
            <br/>
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-0 text-dark bg-white vip-advantages">CONFIRA AS
                VANTAGENS DO VIP</a>
                <br/>
            <a href="#"
                className="btn btn-lg btn-secondary fw-bold border-0 bg-black play-mc-text">JOGAR.MC-PRISMA.COM.BR</a>

    </div>

    </SuperHero>
    )
}

export default BigHero;




