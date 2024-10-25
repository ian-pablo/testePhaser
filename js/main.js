/*function converterImagemParaBase64(elementoIMG) {
    const canvas = document.createElement('canvas');
    canvas.width = elementoIMG.width;
    canvas.height = elementoIMG.height;
    const contexto = canvas.getContext('2d');
    contexto.drawImage(elementoIMG, 0, 0);
    return canvas.toDataURL(); // converte a imagem para base64 para que a imagem possa ser coletada localmente pelo Phaser js
}*/


// cria uma nova cena
let cena = new Phaser.Scene('Game');

// carregar todos os assets
cena.preload = function(){
    // carrega todas as imagens
    /*const fundo = document.querySelector('#assets #panoDeFundo'); // primeiramente carrega a imagem de fundo
    const fundoBase64 = converterImagemParaBase64(fundo);*/
    this.load.image('fundo', 'assets/fundo.webp');//fundoBase64);
};


// chamado apenas uma vez após o preload finalizar
cena.create = function(){
    // cria o sprite do fundo
    this.add.sprite(0, 0, 'fundo');
}


// configura a configuração do jogo
let configuracoes = {
    type: Phaser.AUTO, // como Phaser irá renderizar o jogo, com WebGL ou Canvas
    width: 640,
    height: 360,
    scene: cena
};

// cria o objeto que é o jogo em si, passando para ele a configuração definida anteriormente
let jogo = new Phaser.Game(configuracoes);




