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

    if(email.value !== '' && asunto.value !== ' ' && mensaje.value !== ' '){

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