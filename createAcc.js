const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//show eror fuction

function showError(Input,message){
const formControl = Input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}
function showSuccess(Input){
    const formControl = Input.parentElement;
    formControl.className ='form-control success';
    
}

function isValidEmail(email){
   /*const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;*/
   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return re.test(email);
}
function isValidPassword(password){
    const re =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    return re.test(password);
}
function isValidUsername(username){
    const re = /^[a-zA-Z\-]+.{4,8}$/;
    return re.test(username);
}
//event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value ==''){
        showError(username,'Username is required');
    }else if (!isValidUsername(username.value)){
        showError(username,'Username not valid');
    }
    else{
    showSuccess(username);
    }
    if(email.value ==''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email not valid');
    }
    else{
    showSuccess(email);
    }
    if(password.value ==''){
        showError(password,'Password is required');
    }else if(!isValidPassword(password.value)){
        showError(password,'password not valid');
    }
    else{
    showSuccess(password);
    }
    if(password2.value ==''){
        showError(password2,'Password2 is required');
    }else if(password2.value!=password.value){
        showError(password2,'Password do not Match');
    }

    else{
    showSuccess(password2);
    }
});
