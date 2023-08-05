const tname = document.getElementById('fname');
const lname = document.getElementById('flname');
const email = document.getElementById('ema');
const pass = document.getElementById('pass');
const forma = document.getElementById('button');

forma.addEventListener('click', (event)=>{
    event.preventDefault();
    var firstname = tname.value.trim();
    var lastname = lname.value.trim();
    var emailvalue = email.value.trim();
    var passw = pass.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstname === ''){
        errorFunc(tname,'First Name cannot be empty');
    }else{
        successFunc(tname);
    }

    if(lastname === ''){
        errorFunc(lname,'Last Name cannot be empty');
    }else{
        successFunc(lname);
    }
    if(emailvalue === ''){
        errorFunc(email,'email cannot be empty');
    }else if(!emailvalue.match(pattern)){
        errorFunc(email,'You have entered an invalid email address!');
    }
    
    else{
        successFunc(email);
    }
    if(passw === ''){
        errorFunc(pass,'Password cannot be empty');
    }else{
        successFunc(pass);
    }
});

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerHTML = message;
    req.className +='error';
    span.className += 'error-text';
}
function successFunc(req){
    req.className = 'Success';

}