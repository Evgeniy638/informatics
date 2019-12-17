const clearErrorLabel = (i, j) => {
     document.querySelector(`[line = "${i}"][column = "${j}"]`).parentElement.classList.remove("errorLabel")
}