document.querySelector("#find-detailer").addEventListener("click",function() {
    document.getElementById("popup-1").dataset.show = "true";
})

document.querySelector("#close-popup-1").addEventListener("click",function() {
    document.getElementById("popup-1").dataset.show = "false";
})
