const clearAll = () => {
     let userMatrix = document.getElementById("userMatrix")

     for(let i = userMatrix.childElementCount - 1; i >= 0; i--){
          userMatrix.removeChild(userMatrix.children[i])
     }

     let result = document.getElementById("result")

     for(let i = result.childElementCount - 1; i >= 0; i--){
          result.removeChild(result.children[i])
     }

     clearErrorMessage()
}