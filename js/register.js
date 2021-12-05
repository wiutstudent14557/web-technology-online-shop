const registerBtn = document.getElementById('signUp');
const loginBtn = document.getElementById('signIn');
const container = document.getElementById('container');

//related to form
const hideRegister = document.querySelector(".hideRegister")
const showRegister = document.querySelector(".showRegister")
const createAccount = document.querySelector(".form-createAccount")

//input field
const nameField = document.querySelector(".nameField")
const emailField = document.querySelector(".emailField")
const passwordField = document.querySelector(".passwordField")

//login field
const loginForm = document.querySelector(".loginForm")
const loginPassword = document.querySelector(".loginPassword")
const loginEmail = document.querySelector(".loginEmail")


registerBtn.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

loginBtn.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

hideRegister.addEventListener('click', () => {
    createAccount.style.opacity = 0;
})

showRegister.addEventListener('click', () => {
    createAccount.style.opacity = 1;
})



// register user
createAccount.addEventListener('submit', (e) => {
    e.preventDefault()
    validateUser()
    if(validateUser()){

        let newUser = {
            name:nameField.value,
            email : emailField.value,
            password: passwordField.value,
        }
        let userList=[];

        if(localStorage.getItem('users') == null){
            userList.push(newUser);
            localStorage.setItem('users', JSON.stringify(userList))
        }else{
            userList.shift()    
            userList.push(newUser);
            localStorage.setItem('users', JSON.stringify(userList))
        }
            console.log(userList);
            nameField.value = ""
            emailField.value = ""
            passwordField.value = ""
            container.classList.add("right-panel-active");
            createAccount.style.opacity = 0;
    }
})

//validation 
function validateUser(){
    if (nameField.value === ""){
        nameField.style.borderColor = "red"
        return false
    }else{
        nameField.style.borderColor = "white"
    }

    if (emailField.value === ""){
        emailField.style.borderColor = "red"
        return false
    }else{
        emailField.style.borderColor = "white"
    }

    if (passwordField.value === ""){
        passwordField.style.borderColor = "red"
        return false
    }else{
        passwordField.style.borderColor = "white"
    }

    return true
}

function validateLogin(){
    if (loginEmail.value === ""){
        loginEmail.style.borderColor = "red"
        return false
    }else{
        loginEmail.style.borderColor = "white"
    }

    if (loginPassword.value === ""){
        loginPassword.style.borderColor = "red"
        return false
    }else{
        loginPassword.style.borderColor = "white"
    }

    return true
}

//login user
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    validateLogin()
    if(validateLogin()){
        
        if(localStorage.getItem('users') == null){
           alert("sorry you are not authorized")
        }else if(JSON.parse(localStorage.getItem('users'))[0].email === loginEmail.value && JSON.parse(localStorage.getItem('users'))[0].password === loginPassword.value){
            window.location.pathname = "/web-pages/main.html"
        }else{
            alert("sorry you are not authorized")
        }

        
            loginEmail.value = ""
            loginPassword.value = ""
    }
})