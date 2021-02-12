var mainMess = document.getElementById("message");










function login(){
    let passwordLog = document.getElementById("loginPassword").value;
    let userLog = document.getElementById("loginUser").value;
    let username = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');
    
    if(username == userLog && password == passwordLog){
        document.getElementById("message").innerHTML = `<h3 class="green">welcome back ${userLog}</h3>`;
        setTimeout(function(){ window.location.replace("./files/home.html"); }, 1500);
        
    }else{
        document.getElementById("message").innerHTML = `<h3 class="red">password or username is not correct!!try again</h3>`;
    }
    
}


document.getElementById("btn-log").addEventListener("click", login);

