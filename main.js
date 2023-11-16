function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const litaDeTeclas = documente.querySelectorAll(' .tecla');

//para

for  (let contador = 0; contaor  <listaDeTeclas.length;contador++){

    const tecla = listaDeTeclas[contaor];

    cont instrumento = tecla.classLit[1];

    const idAudio = '#som_${instrumento} ´; //template string

    tecla.onclick = function () {
        tocaSomPom(idAudio);
}

tecla.onkeydown = function (evento)  {

    console.log(evento.cod==)

    if(evento.cod = 'Space'){

        tecla.classLit.add('ativa');
}


}

tecla.onkeydown = function(){
    tecla.classLit.remove('ativa');
}

}
