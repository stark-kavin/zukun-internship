var pass = document.getElementById("show-pass-checkbox");
pass.addEventListener("click",function(){
    if(pass.checked){
        document.getElementById("pass").type = "text"
    }else{
        document.getElementById("pass").type = "password"
    }
});

