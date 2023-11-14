const gitHubId = document.querySelector('input[type=text]')

const btnBuscar = document.querySelector('input[type=button]')
//gitHubId.oninput = function(){
btnBuscar.onclick = function(){
    //Fazendo a conexão com a API
    fetch('http://localhost:8080/livros/' + gitHubId.value)
    .then(Response => {
        if(Response.ok){
            return Response.json()
        }
        else{
            throw new Error('Erro na requisição.')
        }
    })
    .then(data => {
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#editora').textContent = data.editora
        document.querySelector('#resumo').textContent = data.resumo
        document.querySelector('#autor').textContent = data.autor
        //E outros atributos que desejar...
    })
    //tratar exceções
    .catch(error => {
        console.log('Erro: '+ error)
    })
}