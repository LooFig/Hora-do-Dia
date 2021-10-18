function carregar () {
    let res = document.querySelector('div#res');
    let img = document.querySelector('img#img')

    // Identificação do horário
    let data = new Date();
    let horas = data.getHours() >= 9 ? data.getHours() : `0${data.getHours()}`;
    let minutos = data.getMinutes() >= 9 ? data.getMinutes() : `0${data.getMinutes()}`;

    res.innerHTML = `<p>Agora são ${horas}:${minutos}.`;

    // Verificação do horário
    if (horas >= 00 && horas < 6) {
        img.src = 'fotonoite.png';
        document.body.style.background = '#515154';
        res.innerHTML += `<strong>Boa madrugada!`;
    } else if (horas < 12){
        img.src = 'fotomanhã.png';
        document.body.style.background = '#e2cd9f';
        res.innerHTML += `<strong>Bom dia!`;         
    } else if (horas < 18){
        img.src = 'fototarde.png';
        document.body.style.background = '#b9846f';
        res.innerHTML += `<strong>Boa tarde!`;
    } else {
        img.src = 'fotonoite.png';
        document.body.style.background = '#515154';
        res.innerHTML += `<strong>Boa noite!`; 
    }

}