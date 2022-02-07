import '../../design/Loja.css'

function ChooseStore() {
    return (
        <div className="container-fluid vh-100 greyScaleAll">
            <div className="container h-100 storePadding">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-4 containerStoreSize bg-rose">
                            <img className="imageVIP d-block mx-auto"
                              src={require('../../images/coracao-asas.webp')} 
                              width="100%" />
                            <div className="text-center text-center-padding-top">
                                <a href="#" className="btn fw-bold border-0 text-dark bg-white ">É HORA DE
                                    ELEVAR</a>
                            </div>
                            <p className="advantagesText">Vantagens dentro do servidor. Confira!</p>
                        </div>
                        <div className="col-4 containerStoreSize text-white bg-darkGray">
                            <img src={require('../../images/caveira-ban.webp')} className="mx-auto d-block unbanskull" alt="caveira unban" width="40%" />
                            <div className="unbanText" >
                                <a href="#" className="btn fw-bold border-0 unbanText">UNBAN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



export default ChooseStore;