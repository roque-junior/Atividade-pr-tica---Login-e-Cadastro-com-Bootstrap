function Salvar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    let dados = {
        email: email,
        senha: senha
    };

    axios.post('http://localhost:3000/usuarios/login', dados)
    .then(function (response) {
        console.log("Resposta da API:", response.data);
    })   
    .catch(function(error){
        console.log("erro ao fazer a requisição", error)
    });
  }