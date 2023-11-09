const gitHubId = document.querySelector('input[type=text]')

const btnBuscar = document.querySelector('input[type=button]')
//gitHubId.oninput = function(){
btnBuscar.onclick = function(){
    //Fazendo a conexão com a API
    fetch('https://api.github.com/users/' + gitHubId.value)
    .then(Response => {
        if(Response.ok){
            return Response.json()
        }
        else{
            throw new Error('Erro na requisição.')
        }
    })
    .then(data => {
        document.querySelector('#name').textContent = data.name
        document.querySelector('#bio').textContent = data.bio
        document.querySelector('#followers').textContent = data.followers
        document.querySelector('#location').textContent = data.location
        document.querySelector('#avatar').src = data.avatar_url
        //E outros atributos que desejar...
    })
    //tratar exceções
    .catch(error => {
        console.log('Erro: '+ error)
    })
}