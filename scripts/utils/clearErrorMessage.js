const clearErrorMessage = () => {
     let errorMessage = document.getElementById('errorMessage')

     for(let i = errorMessage.childElementCount - 1; i >= 0; i--){
          errorMessage.removeChild(errorMessage.children[i])
     }
}