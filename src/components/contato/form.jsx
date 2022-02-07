import '../../design/Contato.css'

function Form (props) {
    return (

        <div class="container-fluid pt-5 vh-100 NavBarGradient">
            <img class="logoContactCenter" src={props.logo} width="120" height="120" />
                <br/>
                    <div class="container containerRelative paddingContactPage2 contact-form bgForm">
                        <h4 class="paddingTextMessage text-center ">Deixe sua mensagem </h4>
                        <div class="row g-3 needs-validation">
                            <div class="col-md-4">
                                <label for="nomeCompleto" class="form-label fw-bold">Nome completo</label>
                                <input id="nomeCompleto" type="string" class="form-control" placeholder="Nome completo"></input>
                                <p id="nameMissing" class="fw-bolder text-danger"></p>
                            </div>
                            <div class="col-md-4">
                                <label for="IDdeCompra" class="form-label fw-bold">ID de compra</label>
                                <input id="IDdeCompra" type="string" class="form-control"
                                    placeholder="ID de compra realizada no site"></input>
                            </div>
                            <div class="col-md-4">
                                <label for="NickdoServidor" class="form-label fw-bold">Nick do servidor</label>
                                <input id="NickdoServidor" type="string" class="form-control" placeholder="Nome dentro do jogo" required></input>
                                <p id="nickMissing" class="fw-bolder text-danger"></p>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label fw-bold">Endereço de e-mail</label>
                            <input id="contactEmail" type="email" class="form-control"
                                placeholder="Já possuímos essa informação. Mas precisamos confirmar." required></input>
                            <p id="emailMissing" class="fw-bolder text-danger"></p>
                        </div>
                        <div>
                            <div class="mb-3">
                                <label for="areadetexto" class="form-label fw-bold">Em que podemos ajudar?</label>
                                <textarea id="areadetexto" class="form-control" rows="3"
                                    placeholder="Coloque o máximo de detalhes possível." required></textarea>
                                <p id="helpMissing" class="fw-bolder text-danger"></p>
                            </div>
                            <button id="send"class="placeholder-glow btn btn-primary" type="submit">Enviar </button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
        </div>



);
}

export default Form ;