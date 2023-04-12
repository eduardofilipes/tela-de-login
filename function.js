function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#usuario')
  
  let senha = document.querySelector('#senha')
  let SenhaLabel = document.querySelector('#senha')
  
  let msgError = document.querySelector ('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad &&senha.value == item.senhaCad){
      
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
      
      
    }
  })
  
if(usuario.value == userValid.user && senha.value == userValid.senha){
 window.location.href = 'https://cdpn.io/pen/debug/NWOGQbP?authentication_hash=yoAZEBdqnLqr'
  
  let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
  localStorage.setItem('token', token)
} else {
  userLabel.setAttribute('style', 'color: red')
  usuario.setAttribute('style', 'color: red')
  senhaLabel.setAttribute('style', 'color: red')
  senha.setAttribute('style', 'color: red')
  msgError.setAttribute('style', 'display: block')
  msgError.innerHTML = 'Usuário ou senha incorretos'
  usuario.focus()
}
  
}
