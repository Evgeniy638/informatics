const userInputProgram = (sizeMatrix, maxlength) => {
     createMatrix(sizeMatrix, maxlength, "Изначальная матрица(вводите)", false)
}

const userInputProgramContinue = (sizeMatrix, maxlength) => {
     let matrix = [
          ...getUserEnterMatrix(sizeMatrix)
     ]

     if (matrix[0] === null) {
          return false;
     }

     let copyMatrix = [
          ...createCopyMatrix(matrix)
     ]

     sortMatrix(matrix, copyMatrix)

     showResult(matrix)
}