const makeErrorLabel = (i, j) => {
     document.querySelector(`[line = "${i}"][column = "${j}"]`).parentElement.classList.add("errorLabel")
}