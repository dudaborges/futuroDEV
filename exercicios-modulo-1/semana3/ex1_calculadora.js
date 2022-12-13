const calculadora = function(salario){
    const imprimeSalario = function(antes, percentual, aumento, novo){
        document.write(`<p>Salário antes do reajuste: ${antes}</p>`)
        document.write(`<p>Percentual de aumento aplicado: ${percentual}</p>`)
        document.write(`<p>Valor do aumento: ${aumento}</p>`)
        document.write(`<p>Novo o salário, após o aumento: ${novo}</p>`)
    }

    let aumento = 0
    let novo = 0

    // se a expressão for verdadeira imprima isso
    //break é para interromper a seção de um laço
    switch(true){
        case(salario <= 280): 
        aumento = salario * 0.2
        novo = salario + aumento
        imprimeSalario(salario, '20%', aumento, novo)
        break;
        case(salario > 280 && salario <= 700):
        aumento = salario * 0.15
        novo = salario + aumento
        imprimeSalario(salario, '15%', aumento, novo)
        break;
        case(salario > 700 && salario <= 1500):
        aumento = salario * 0.10
        novo = salario + aumento
        imprimeSalario(salario, '10%', aumento, novo)
        break;
        case(salario > 1500):
        aumento = salario * 0.05
        novo = salario + aumento
        imprimeSalario(salario, '5%', aumento, novo)
        break;
    }
}
    calculadora(2050)