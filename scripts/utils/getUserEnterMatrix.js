const getUserEnterMatrix = (sizeMatrix) => {
     clearErrorMessage()

     let matrix = []

     let hasError = false

     for (let i = 0; i < sizeMatrix; i++) {
          matrix[i] = []

          for (let j = 0; j < sizeMatrix; j++) {
               clearErrorLabel(i, j)

               let number = document.querySelector(`[line = "${i}"][column = "${j}"]`).value
               
               if (!isHexNumber(number)) {
                    makeErrorLabel(i, j)
                    showErrorMessage(`Такого числа в 16 - ричной системе счисления 
                                   нет (строка - ${i + 1}, столбец - ${j + 1})`)
                    hasError = true
               }

               matrix[i][j] = parseInt(number, 16).toString(16)

               if (matrix[i][j].length !== 2) {
                    makeErrorLabel(i, j)
                    showErrorMessage(`Число должно быть двузначным (строка - ${i + 1}, столбец - ${j + 1})`)
                    hasError = true
               }
          }
     }

     return hasError ? [null] : matrix
}

const isHexNumber = (str) => {
     for(let i = 0; i < str.length; i++){
          if ((str.toLowerCase()[i] < "a" || str.toLowerCase()[i] > "f") && 
               (str[i] < "0" || str[i] > "9")){

                    return false
          }
     }

     return true;
}