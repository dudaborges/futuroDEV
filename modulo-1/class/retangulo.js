// método dentro da classe

class Retangulo{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    calcularArea(){
        return console.log(this.altura * this.largura)
    }

}

const retangulo = new Retangulo(20, 10)
console.log(retangulo)
// para acessar o método dentro da classe
retangulo.calcularArea()