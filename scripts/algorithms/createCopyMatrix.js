const createCopyMatrix = (matrix) => {
     let mx = [...matrix]

     let copyMatrix = []

     for(let i = 0; i < mx.length; i++){
          copyMatrix[i] = []

          for(let j = 0; j < mx[i].length; j++){
               copyMatrix[i][j] = parseInt(mx[i][j], 16)
          }  
     }

     return copyMatrix
}