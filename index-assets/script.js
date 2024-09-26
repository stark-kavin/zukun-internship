function check_box_change(container){
    all_container = document.querySelectorAll(".content-container .container");
    all_container.forEach(element => {
        element.classList.add("hidden");
        console.log(element)
    });
    document.querySelector(`.${container}`).classList.remove("hidden");
}

