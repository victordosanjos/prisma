import { css, styled } from '../../configs/stitches.config.ts';
import { Div } from '../../design/js/Loja';
import '../../design/media/mediaFix.css'

function ChooseStore() {
    return (
        <Div Color="lightGrey" className="container-fluid vh-100 greyBackgroudFixDarkMode">
            <Div 
            Color="white" 
            Space="whiteContPad" Sizes="whiteContWid" className="container h-100 whiteBackgroundFixDarkMode">
                <div className="container ">
                    <div className="row justify-content-around">
                        <Div Color="lightPink" Radii="borderVip" className="col-4 containerStoreSizeMobile ">
                            <img className="imageVIP d-block mx-auto"
                              src={require('../../images/heart-wings.png')} 
                              width="100%" />
                            <div className="text-center text-center-padding-top">
                                <a href="#" className="btn fw-bold border-0 text-dark bg-white MobileTextVipFixColor">É HORA DE
                                    ELEVAR</a>
                            </div>
                            <p className="advantagesText">Vantagens dentro do servidor. Confira!</p>
                        </Div>
                        <Div Color="darkGrey"  Radii="borderUnban" className="col-4 containerStoreSizeMobile text-white bgUnbanFixDarkMode">
                            <img src={require('../../images/caveira-ban.webp')} className="mx-auto d-block unbanskull " alt="caveira unban" width="40%" />
                            <Div Space="UnbanPadText" >
                                <Div Fonts="unbanText" FontSizes="unbanTextSize" 
                                FontWeights="unbanBold"
                                Color="whiteText"
                                href="#" className="btn fw-bold border-0 MobileTextUnbanFixColor unbanTextColorFixDarMode">UNBAN</Div>
                            </Div>
                        </Div>
                    </div>
                </div>
            </Div>
        </Div>

    );
}



export default ChooseStore;