var mainMess = document.getElementById("message");








function main_check(){
    let accept = document.getElementById("accept").checked;
    let email = document.getElementById("registerEmail").value;
    let username = document.getElementById("registerUser").value;
    let password = document.getElementById("registerPassword1").value;
    let password2 = document.getElementById("registerPassword2").value;
    if(check_user(username) && check_email(email) && check_password(password) && accept == true && password == password2){
        mainMess.innerHTML = `<h3 class="green">account created</h3>`;
        //store the username & password in the session
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
    }
    else if(check_email(email) == false){
        mainMess.innerHTML = `<h3 class="red">email format wrong</h3>`;
       
    }
    else if(check_password(password) == false){
        mainMess.innerHTML = `<h3 class="red">password format wrong</h3>`;
       
    }
    else if(password != password2){
        mainMess.innerHTML = `<h3 class="red">password validation does not match</h3>`;
        
    }else{
        mainMess.innerHTML = `<h3 class="red">email or password format not allowed</h3>`;
    }
}

function check_user(username){
    var re = new RegExp(/^[a-zA-Z0-9]{6,18}$/);
    let error = false;
    if(re.test(username)){
        error = true;
    }else{
        error = false;
    }
    console.log("username" + error);
    return error;
    
}
function check_email(email){
    var re = new RegExp(/^[^@]+@[^@]+\.[^@]{2,4}$/);
    let error = false;
    if(re.test(email)){
        error = true;
    }else{
        error = false;
    }
    console.log("email" + error);
    return error;
    
}

function check_password(password){
    var re = new RegExp(/^[A-Za-z]\w{7,14}$/);
    let error = false;
    if(re.test(password)){
        error = true;
    }else{
        error = false;
    }
    console.log("password" + error);
    return error;
    
}




document.getElementById("btn-register").addEventListener("click", main_check);

