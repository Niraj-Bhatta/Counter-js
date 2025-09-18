const plusBtn =document.querySelector(".plus-btn")
const minusBtn =document.querySelector(".minus-btn")
const count=document.querySelector(".count")
const inputBox=document.querySelector(".input-box")

const resetBtn=document.querySelector(".color-button1")


plusBtn.addEventListener('click',() => {

const countValue=parseInt(count.innerText)
count.innerText=countValue + parseInt(inputBox.value)


})
minusBtn.addEventListener('click',()=> {

const countValue=parseInt(count.innerText)
count.innerText=countValue - parseInt(inputBox.value)



})

resetBtn.addEventListener('click',() =>{
    count.innerText=0
    inputBox.value=1
})