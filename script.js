// Variáveis
const screen1 = document.querySelector(`.screen1`)
const screen2 = document.querySelector(`.screen2`)
const btnTry = document.querySelector(`#btnTry`)
const btnReset = document.querySelector(`#btnReset`)
let randonNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener(`click`, handleTryClick)
btnReset.addEventListener(`click`, handleResetClick)
document.addEventListener(`keydown`, keyDown)
  
// Funções 
function handleTryClick(event){
  event.preventDefault()
  const inputNumber = document.querySelector(`#inputNumber`)

  if(Number(inputNumber.value) == randonNumber){
      toogleScreen()
      screen2.querySelector(`h2`)
      .innerText = `Você acertou em ${xAttempts} tentativas!`
  }else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || !Number(inputNumber.value) && Number(inputNumber.value)!=0 
  || inputNumber.value == ``) {
    alert(`Digite um número entre 0 e 10!`)
    xAttempts--
  }
     
  inputNumber.value = ``
  xAttempts++
}

function handleResetClick(){
  toogleScreen()
  xAttempts = 1
  randonNumber = Math.round(Math.random() * 10)
}

function toogleScreen(){
  screen1.classList.toggle(`hide`)
  screen2.classList.toggle(`hide`)
}

function keyDown(e){
  if(e.key == "Enter" && screen1.classList.contains(`hide`)){
    handleResetClick()
  }
}
/*
function handleClick2(event) {
  event.querySelector
  
  document.querySelector(`.screen1`).classList.add(`hide`)
  document.querySelector(`.screen2`).classList.remove(`hide`)

}*/