function calcula_juros_rotativo(rotativo, taxa, tempo) {
    return juros_compostos(rotativo, taxa, tempo)
}


function juros_compostos(c, i, t) {
    const juros = c * (1 + (i/100))**t
}


function calcula_fatura_futura(valor, taxa, meses) {
    const valor_futuro = valor + juros_compostos(valor, taxa, meses)
    return valor_futuro
}