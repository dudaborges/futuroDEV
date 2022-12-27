// começa sempre com um requisito para quebrar o loop

function somatorio(x){
    if(x <= 1){
        return 1
    }else{
        return x + somatorio(x - 1)
    }
}

console.log(somatorio(3))
