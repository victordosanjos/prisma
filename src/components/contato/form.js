import { styled } from '../../configs/stitches.config.ts'
import { Div } from '../../design/js/Contato';
import '../../design/media/mediaFix.css'
import { H4 } from '../../design/js/Contato';

function Form (props) {
    return (

        <Div className="container-fluid BackGroundContactDarkModeFix pt-5 vh-100">
            <img className="mx-auto d-block" src={props.logo} width="120" height="120" />
                <br/>
                    <Div Radii="contactFormRadius" Space="contactFormPadding" className="container contact-form formBackgroundDarkModeFix">
                        <H4 Space="contactFormPadding" className=" text-center ">Deixe sua mensagem </H4>
                        <div className="row g-3 needs-validation">
                            <div className="col-md-4">
                                <label for="nomeCompleto" className="form-label fw-bold">Nome completo</label>
                                <input id="nomeCompleto" type="string" className="form-control" placeholder="Nome completo"></input>
                                <p id="nameMissing" className="fw-bolder text-danger"></p>
                            </div>
                            <div className="col-md-4">
                                <label for="IDdeCompra" className="form-label fw-bold">ID de compra</label>
                                <input id="IDdeCompra" type="string" className="form-control"
                                    placeholder="ID de compra realizada no site"></input>
                            </div>
                            <div className="col-md-4">
                                <label for="NickdoServidor" className="form-label fw-bold">Nick do servidor</label>
                                <input id="NickdoServidor" type="string" className="form-control" placeholder="Nome dentro do jogo" required></input>
                                <p id="nickMissing" className="fw-bolder text-danger"></p>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label fw-bold">Endereço de e-mail</label>
                            <input id="contactEmail" type="email" className="form-control"
                                placeholder="Já possuímos essa informação. Mas precisamos confirmar." required></input>
                            <p id="emailMissing" className="fw-bolder text-danger"></p>
                        </div>
                        <div>
                            <div className="mb-3">
                                <label for="areadetexto" className="form-label fw-bold">Em que podemos ajudar?</label>
                                <textarea id="areadetexto" className="form-control" rows="3"
                                    placeholder="Coloque o máximo de detalhes possível." required></textarea>
                                <p id="helpMissing" className="fw-bolder text-danger"></p>
                            </div>
                            <button id="send"className="placeholder-glow btn btn-primary" type="submit">Enviar </button>
                        </div>
                    </Div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
        </Div>



);
}

export default Form ;