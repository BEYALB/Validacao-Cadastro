

function cadastrar(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(name, email, password);
    let mensaem = document.querySelector(".mensagem");
    

    // validações 
    if(name.trim()=== ""){
        mensaem.innerHTML = "O nome precisa ser preenchido";
        return;
    }
    if(email.includes("@")=== false){
        mensaem.innerHTML = "O email precisa ser preenchido";
        return;
    }
    if(password.length < 6){
        mensaem.innerHTML = "A senha precisa ter no minimo 6 caracteres";
        return;
    }
    mensaem.innerHTML = "Cadastro realizado com sucesso";
    
}