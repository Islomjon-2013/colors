let container=document.querySelector(`.container`)
let btn = document.querySelector(`#btn`)

btn.addEventListener(`click`,function(){
    container.style.background =rgb()
    container.innerHTML = rgb()
})


function rgb(){
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    return `rgb(${r},${g},${b})`

}







    