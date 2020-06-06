function menuToggle() {
    var el = document.getElementById("mob-opts")
    if(el.classList.contains("show")){
        el.classList.remove("show")
    }
    else{
        el.classList.add("show")
    }
}