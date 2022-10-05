/* Making a request to the API. 
var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then( response => response.json())
.then( r => { 
    if (r.erro){
        throw Error('Esse Cep Não Existe')
    } else

    console.log(r)
})
.catch( error => console.log(error))
.finally(mensagemos => console.log('Processamento concluído!'));

console.log(consultaCep);

*/

async function buscaEndereco(cep) {

    mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro) {
            throw Error('Cep não existe!')
        }

        /* Getting the values from the API and putting them in the input fields. */
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida);
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido</p>`;
        console.log(erro);
       
    }
}

/* Adding an event listener to the input field. */
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => { buscaEndereco(cep.value)});



