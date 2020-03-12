// SCRIPT DA PAGINA DE CADASTRO


$(function() {
    $("#password").passwordStrength();
    
});


function validation(){
        var form = document.getElementById('form');
        var email = document.getElementById('email').value;
        var text = document.getElementById('text');

        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(pattern)){
            form.classList.add('valid')
            form.classList.remove('invalid')
            text.innerHTML = "Seu email e válido"
            text.style.color = "#00ff00";
        }else{
            form.classList.remove('valid')
            form.classList.add('invalid')
            text.innerHTML = "Email inválido, digite novamente";
            text.style.color = "#ff0000";
        }

        if(email == ""){
            form.classList.remove('valid')
            form.classList.remove('invalid')
            text.innerHTML = ""
            text.style.color = "#00ff00";
        }
 }


  

function showHide(){

            let password = document.getElementById('password');
            let toggle = document.getElementById('toggle');


            if(password.type  === 'password'){
                password.setAttribute('type','text')
                toggle.classList.add('hide')
            }else{
                password.setAttribute('type','password')
                toggle.classList.remove('hide')
            }
        }


        function confirmPassword(){
            let password = document.getElementById('password').value 
            let confirmPassword = document.getElementById('password-confirm').value

            if(password === confirmPassword){

            }else{
              
            }

}    




    
