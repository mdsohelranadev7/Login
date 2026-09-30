let useremail = document.getElementById("useremail")
let userpass = document.getElementById("userpass")
let loginbtn = document.getElementById("loginbtn")
let loginfrom = document.getElementById("loginfrom")
let loginpart = document.getElementById("loginpart")
let secoupart = document.getElementById("secoupart")
let eyebtn = document.getElementById("eyebtn")
let showpass = document.getElementById("showpass")



loginfrom.addEventListener("submit", (e) => {

    e.preventDefault();

    let useremails = useremail.value;
    let userpasss = userpass.value;

    if (useremails === "123" && userpasss === "123") {

        loginpart.style.display = "none";
        secoupart.removeAttribute("hidden");

    } else {

        alert("wrong");

    }

});


showpass.addEventListener("click", () => {

    if (userpass.type === "password") {

        userpass.type = "text"
        eyebtn.classList.remove("fa-eye")
        eyebtn.classList.add("fa-eye-slash")

    }

    else {
        userpass.type = "password"
        eyebtn.classList.add("fa-eye")
        eyebtn.classList.remove("fa-eye-slash")


    }
})