function showPass(button) {

    console.log(button)

    if(button.dataset.state == "hide"){
        button.parentNode.children[0].type = "text";
        button.dataset.state = "show";
    }else{
        button.parentNode.children[0].type = "password";
        button.dataset.state = "hide";
    }
}