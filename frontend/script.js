const API="http://localhost:3000/auth";

async function register(){

const nome=document.getElementById("nome").value;

const email=document.getElementById("emailCadastro").value;

const senha=document.getElementById("senhaCadastro").value;

await fetch(API+"/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

nome,
email,
senha

})

});

alert("Usuário cadastrado");

}

async function login(){

const email=document.getElementById("email").value;

const senha=document.getElementById("senha").value;

const resposta=await fetch(API+"/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email,
senha

})

});

const dados=await resposta.json();

if(dados.token){

localStorage.setItem("token",dados.token);

location.href="dashboard.html";

}else{

alert("Login inválido");

}

}