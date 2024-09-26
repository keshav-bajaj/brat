const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#89cc04"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "black"
ctx.filter = "blur(1.5px)";
let check = document.getElementById("check")
ctx.font = "75px Arial Narrow";

setInterval(()=>{
  ctx.clearRect(0,0,500,500)
  ctx.fillStyle = "#89cc04"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "black"
  let text = document.querySelector("#text").value || "brat"
  check.innerHTML = text
  let width = check.getBoundingClientRect().width
  ctx.save();
  ctx.scale(100 / 135, 1)
  ctx.textAlign = "center"
  let textArray = text.split("\n")
  let tick = 0
  let margin = (400-textArray.length*75)/2

  textArray.forEach((a) =>{
    ctx.fillText(a, canvas.width / 2 * (135 / 100), margin + 75*tick +60 )
    tick++
  })
  ctx.restore();
},200)


function downloadBrat(){
    var canvas1 = document.getElementById("board")
    
    var imageObject = new Image()
    imageObject.src = canvas1.toDataURL("image/png")

    var imageElement = document.createElement("img")
    imageElement.src = imageObject.src

    let link = document.createElement("a")
    link.setAttribute('download', "download")
    link.href= imageElement.src
    link.click()
}
document.querySelector("#download").addEventListener("click",downloadBrat)