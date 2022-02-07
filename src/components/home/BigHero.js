import React from "react";
import { css, styled } from '../../configs/stitches.config.ts';
import { SuperHero } from "../../design/js/Home";
import { Texts } from "../../design/js/Home";
import { A } from "../../design/js/Home";
import '../../design/media/mediaFix.css'

const BigHero = (props) => {
    return (
        <SuperHero className="container-fluid vh-100 darkModeHero">
        <br/>
        <br/>
        <br/>
        <img className="img-fluid" src={props.bgHero} alt="logo prisma branco" width="10%" height="17%"/>
        <Texts>PRISMA</Texts>

        <div className="server-connect server-information">
            <br/>
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-0 text-dark bg-white vip-advantages">CONFIRA AS
                VANTAGENS DO VIP</a>
                <br/>
            <A href="#"
                className="btn btn-lg btn-secondary fw-bold border-0 bg-black play-mc-text">JOGAR.MC-PRISMA.COM.BR</A>

    </div>

    </SuperHero>
    )
}

export default BigHero;




