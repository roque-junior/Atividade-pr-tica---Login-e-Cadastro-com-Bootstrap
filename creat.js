function criou(){
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById("nome").value

    let dados = {
        email: email,
        senha: senha,
        nome: nome
    };

    axios.post('http://localhost:3000/usuarios', dados)
    .then(function (response) {
        console.log("Resposta da API:", response.data);
    })   
    .catch(function(error){
        console.log("erro ao fazer a requisição", error)
    });
  }