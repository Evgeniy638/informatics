const showErrorMessage = (text) => {
     let errorMessage = document.getElementById("errorMessage")
     
     let p = document.createElement("p")
     p.textContent = text

     errorMessage.appendChild(p)
}