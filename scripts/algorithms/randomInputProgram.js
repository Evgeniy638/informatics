const randomInputProgram = (sizeMatrix, maxlength) => {
     let matrix;

     createMatrix(sizeMatrix, maxlength, 
          "Изначальная рандомно созданная таблица", true)

     matrix = [
          ...programEnterMatrix(sizeMatrix, maxlength)
     ]

     let copy_matrix = [
          ...createCopyMatrix(matrix)
     ]

     matrix = sortMatrix(matrix, copy_matrix)

     showResult(matrix)
}