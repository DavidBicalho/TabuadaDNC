function tabuada(){
    var num = window.document.getElementById('num')
    var and = document.getElementById('and')
    if (num.value.length == 0 || and.value.length == 0){
        window.alert ('[ERRO] Confira os dados.')
    }
    else {
    var n = Number(num.value)
    var e = Number(and.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')
    res.innerHTML = `A tabuada do ${n} é: <br>`
    do{
        r = n*x
        res.innerHTML += `${x} X ${n} = ${r} <br>`
        x++
    }while(x <= e)

}
}