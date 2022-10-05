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
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro) {
            throw Error('Cep não existe!')
        }

        console.log(consultaCepConvertida);
    } catch (erro) {
        console.log(erro)
    }
}

/* Adding an event listener to the input field. */
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => { buscaEndereco(cep.value)});
