function getPassword(){

    let chars='1234567890qaswedfrtg@#$%^&*(){}';
    let passwordLength = 16;
    let password="";

    for(var i=0 ;i<passwordLength;i++){
        let randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber,randomNumber+1)
    }
document.getElementById("password").value = password
alertBox.innerHTML = "New password copied:<br>" + password
}

var alertBox = document.querySelector('.alertBox')

function copyPassword(){

    let copyPassword = document.getElementById("password");
    copyPassword.select()
    copyPassword.setSelectionRange(0,9999)
    document.execCommand("copy");
    alertBox.classList.toggle('active')
    setTimeout(function(){
        alertBox.classList.toggle('active')

    },1000)

}