function sender() {

    // Coletar as informações do form 
    const fullName = document.querySelector('#nomeCompleto').value;
    const idCompra = document.querySelector('#IDdeCompra').value;
    const nickServer = document.querySelector('#NickdoServidor').value;
    const contactEmail = document.querySelector('#contactEmail').value;
    const helpText = document.querySelector('#areadetexto').value;

    if (!fullName)
        return document.querySelector('#nameMissing').innerHTML = "Você precisa preencher seu nome completo."
    

    if (!nickServer)
        return document.querySelector('#nickMissing').innerHTML = "Precisamos identificar você no servidor."

        
    if (!contactEmail)
    return document.querySelector('#emailMissing').innerHTML = "Não há uma forma de ajudar se não conseguirmos entrar em contato."
    
    if (!helpText)
        return document.querySelector('#helpMissing').innerHTML = "Descreva como podemos te ajudar."

}