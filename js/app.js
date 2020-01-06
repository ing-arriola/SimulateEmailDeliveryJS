const email=document.getElementById('email')
const asunto=document.getElementById('asunto')
const mensaje= document.getElementById('mensaje')
const btnEnviar=document.getElementById('enviar')

eventListeners()

function eventListeners(){
    document.addEventListener('DOMContentLoaded',AppStart)
    email.addEventListener('blur',validateField)
    asunto.addEventListener('blur',validateField)
    mensaje.addEventListener('blur',validateField)
}

function AppStart (){
    btnEnviar.disabled=true
}
//Function to validate Field
function validateField(){

    validateLong(this)
    //Validating if the field email has a @ character
    if(this.type === 'email'){
        validateEmail(this)
    }
    
    let errores = document.querySelectorAll('.error')
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if (errores.length === 0){
            btnEnviar.disabled=false
        }
    }


}

//Arrow functions that add styles to the fields depending if it has a value or is empty
const validateLong = (field) => {
    console.log(field.value.length)
    if (field.value.length>0){
        field.style.borderBottomColor='green'
        field.classList.remove('error')
    }else{
        field.style.borderBottomColor='red'
        field.classList.add('error')
    }
}

//this function get the value of the email field and it looking for a "@" character ...
//If the field has a "@" then is colored as green and the error is cleaned... but
//else if the field has no a "@" the field is colored as red an error is added
const validateEmail = (email) => {
    const field=email.value
    if(field.indexOf('@') !== -1){
        email.style.borderBottomColor='green'
        email.classList.remove('error')
    }else{
        email.style.borderBottomColor='red'
        email.classList.add('error')
    }
}