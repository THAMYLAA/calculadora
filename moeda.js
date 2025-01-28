const calcular = document.getElementById('calcular');

function converterMoeda() {
    const cotacao = +document.getElementById('cotacao').value;
    const valorReal = +document.getElementById('valorReal').value;
    const resultado = document.getElementById('resultado');

    if (cotacao > 0 && valorReal > 0) {
        const valorConvertido = (valorReal / cotacao).toFixed(2);
        resultado.textContent = `O valor de R$ ${valorReal} convertido em Dólares é $ ${valorConvertido} (Taxa: R$ ${cotacao}).`;
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos corretamente!';
    }
}

calcular.addEventListener('click', converterMoeda);
