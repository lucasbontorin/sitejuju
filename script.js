function carregar(){
    var agora = new Date;
    var horas = agora.getHours()
    var imagem = document.querySelector('img#imagem')
    var txthoras = document.querySelector('div#escritahoras')
    txthoras.innerHTML = `Agora são ${horas} horas e provavelmente a Ju está`
    if(horas >=21 || horas <= 4){
        imagem.src = 'dormindo.png'
        document.body.style.background = '#847955'
        txthoras.innerHTML += '<p><strong>DORMINDO<strong></p>'
    } else if(horas >=7 && horas < 12){
        imagem.src = 'estagio.png'
        document.body.style.background = '#bbb090'
        txthoras.innerHTML += '<p><strong>ESTAGIANDO<strong></p>'
    }else if(horas >= 12 && horas < 18){
        imagem.src = 'escola.png'
        document.body.style.background = '#403e4e'
        txthoras.innerHTML += '<p><strong>NA ESCOLA<strong></p>'
    }else if(horas >= 18 && horas < 21){
        imagem.src = 'estudando.png'
        document.body.style.background = '#bf9f79'
        txthoras.innerHTML += '<p><strong>ESTUDANDO<strong></p>'
    }else {
        imagem.src = 'acordando.png'
        document.body.style.background = '#989a8d'
        txthoras.innerHTML += '<p><strong>ACORDANDO<strong></p>'
    }


}