const startProgram = () => {
     let sizeMatrix = 4
     let maxlength = 2

     clearAll()

     let radios = document.querySelectorAll('[name = "enterMatrix"]')

     let value

     for (radio of radios) {
          if (radio.checked) {
               value = radio.value
          }
     }

     if (value === "program") {
          randomInputProgram(sizeMatrix, maxlength)          
     } else if (value === "user") {
          userInputProgram(sizeMatrix, maxlength)
     } else {
          showErrorMessage("Вы ничего не выбрали")
     }
}

window.onload = () => {
     document.getElementById("selectEnterMatrix").addEventListener("click", startProgram)
}