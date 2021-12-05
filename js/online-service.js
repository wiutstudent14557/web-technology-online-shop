let form = document.querySelector('form');
let tr = document.querySelectorAll("tr")
let tbody = document.querySelector("tbody")
let user = document.querySelector(".user")
let phoneNum = document.querySelector(".phoneNum")
let beerType = document.querySelector(".beerType")
let place = document.querySelector(".location")




let allData = [
    {username:"Sherzodbek",phone:991234598,beer:"Lager",location:"Fergana"},
    {username:"Sayfullo",phone:331547956,beer:"Budweiser",location:"London"},
    {username:"Nasibullo",phone:991234598,beer:"Ales",location:"Xorezm"},
]

function getInfo(){
    allData.forEach((data,index)=>{
        let newTr = document.createElement('tr');
        let i = document.createElement('td');
        let number = document.createElement('td');
        let username = document.createElement('td');
        let phone = document.createElement('td');
        let beer = document.createElement('td');
        let location = document.createElement('td');
     
        username.innerHTML += data.username
        number.innerHTML += index+1
        phone.innerHTML += data.phone
        beer.innerHTML += data.beer
        location.innerHTML += data.location
     
        newTr.append(number,username,phone,beer,location)
        tbody.appendChild(newTr)     
     })
}
getInfo()


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(beerType.value !== "" && user.value !== "" && phoneNum.value !== "" && place.value !== ""){
        allData.push({username:user.value,phone:phoneNum.value,beer:beerType.value,location:place.value})
        user.value = ""
        phoneNum.value = ""
        place.value = ""
        beerType.value = ""
        getInfo()
    }else{
        alert("Please add all criteria")
    }
})




