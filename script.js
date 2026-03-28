function openInvite(){

document.getElementById("main").classList.remove("hidden")

document.getElementById("music").play()

window.scrollTo({
top:400,
behavior:"smooth"
})

}

let weddingDate = new Date("Feb 20, 2027 10:30:00").getTime()

setInterval(function(){

let now = new Date().getTime()

let distance = weddingDate - now

let days = Math.floor(distance/(1000*60*60*24))
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))

document.getElementById("timer").innerHTML =
days + " Days " + hours + " Hours Remaining"

},1000)

function sendRSVP(){

let name = document.getElementById("guest").value

let message =
"Hello, I am "+name+" confirming my attendance for Nagaraj & Shailaja's wedding."

window.open(
"https://wa.me/?text="+message
)

}

/* Flower petals */

function createPetal(){

const petal = document.createElement("div")

petal.classList.add("petal")

petal.style.left = Math.random()*100+"vw"

petal.style.animationDuration = 3+Math.random()*5+"s"

document.querySelector(".petals").appendChild(petal)

setTimeout(()=>{
petal.remove()
},8000)

}

setInterval(createPetal,300)
