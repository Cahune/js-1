function myFunction(button) {
    var answer = button.parentElement.querySelector('#answer');
  
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        button.classList.remove("ti-plus");
        button.classList.add("ti-minus");
    } else {
        answer.style.display = "none";
        button.classList.remove("ti-minus");
        button.classList.add("ti-plus");
    }
}
