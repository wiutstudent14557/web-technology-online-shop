//declaring elements
let header  = document.querySelector("#header")
let scroll = document.querySelector(".progressStyle")
let emailAccount = document.querySelector(".emailAccount")
let nameAccount = document.querySelector(".nameAccount")
let menuBTN = document.querySelector(".menuBTN")
let ulWrapper = document.querySelector(".ul-wrapper")
let blackModal = document.querySelector(".black-modal")
let logoutButton = document.querySelector(".logout")
let moreInfoCompany = document.querySelector(".moreInfoCompany")
let readMoreCompany = document.querySelector(".readMoreCompany")
let circleIcon = document.querySelector(".circleIcon")
let viewAllImages = document.querySelector(".tastefully-images__button")
let hiddenPhoto  = document.querySelectorAll(".hiddenPhoto")


let images = document.querySelectorAll(".circle-image")
let imageWrapper = document.getElementById("all-image-wrapper");
let imgItem = document.getElementById("modal-image");
let closeButton = document.querySelector(".hide-btn");

let hiddenMoreInfo = document.querySelectorAll(".continueBtn")
let continueBtn = document.querySelectorAll(".continueBtn")
let hiddenCloseBtn = document.querySelectorAll(".hiddenCloseBtn")


continueBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        btn.parentElement.nextElementSibling.style.top = "0"
    })
})

hiddenCloseBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        btn.parentElement.style.top = "-200%"
    })
})

window.addEventListener("load",()=>{
    if(!localStorage.getItem("users")){
        return window.location.href = "/index.html"
    }
})


images.forEach(div=>{
    div.addEventListener('click', ()=>{
        imageWrapper.style.display = "block";
        imgItem.src = div.firstElementChild.firstElementChild.src;
    })
})

closeButton.addEventListener('click', ()=>{
    imageWrapper.style.display = "none"
})


//header style
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky-header",window.scrollY>20)
})
// changing scroll via adding some kinda animation
window.addEventListener("scroll",function(){
    let whole_progressHeight = (window.pageYOffset/(document.body.scrollHeight-window.innerHeight))*100;
    scroll.style.height = `${whole_progressHeight}%`;
})

emailAccount.innerHTML = JSON.parse(localStorage.getItem('users'))[0].email
nameAccount.innerHTML = JSON.parse(localStorage.getItem('users'))[0].name

menuBTN.addEventListener("click",()=>{
    ulWrapper.classList.toggle("activeUl")
    blackModal.classList.toggle("activeBlackModal")
    blackModal.addEventListener("click",()=>{
        ulWrapper.classList.remove("activeUl")
        blackModal.classList.remove("activeBlackModal")
    })
})

logoutButton.addEventListener("click",()=>{
    window.location.href = "/index.html"
})


readMoreCompany.addEventListener("click",()=>{
    moreInfoCompany.style.clipPath = "circle(100%)"
})

circleIcon.addEventListener("click",()=>{
    moreInfoCompany.style.clipPath = "circle(0%)"
})

viewAllImages.addEventListener("click",()=>{
    hiddenPhoto.forEach(photo=>{
        photo.classList.toggle("activePhoto")
        if(viewAllImages.innerHTML === "View limited items"){
        }
    })    
})

