const programEnterMatrix = (sizeMatrix, maxlength) => {
     let matrix = []

     for (let i = 0; i < sizeMatrix; i++) {

          matrix[i] = []

          for (let j = 0; j < sizeMatrix; j++) {
               let matrixNumber = ""

               for (let k = 0; k < maxlength; k++) {
                    let newDigit = Math.floor(Math.random() * 16)

                    do{
                         newDigit = Math.floor(Math.random() * 16)
                    }while(k == 0 && newDigit == 0)

                    matrixNumber += newDigit.toString(16)
               }

               matrix[i][j] = matrixNumber
               document.querySelector(`[line = "${i}"][column = "${j}"]`).parentElement.textContent = matrixNumber
          }
     }

     return matrix
}