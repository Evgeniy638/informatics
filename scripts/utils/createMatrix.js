const createMatrix = (sizeMatrix, maxlength, text, isRandomInput) => {
     let userMatrix = document.getElementById("userMatrix")

     let table = document.createElement("table")

     let caption = document.createElement("caption")
     caption.textContent = text
     table.appendChild(caption)

     for (let i = -1; i < sizeMatrix; i++) {
          let tr = document.createElement("tr")

          for (let j = -1; j < sizeMatrix; j++) {
               let td = document.createElement("td")

               if(j === -1 && i === -1){
                    td.classList.add("numLineOrColumnTable")
               }else if(j === -1 && i !== -1){
                    td.textContent = i + 1
                    td.classList.add("numLineOrColumnTable")
               }else if(j !== -1 && i === -1){
                    td.textContent = j + 1
                    td.classList.add("numLineOrColumnTable")
               }else{
                    let input = document.createElement("input")

                    input.setAttribute("maxlength", maxlength)
                    if(isRandomInput) input.setAttribute("readonly", isRandomInput)
                    input.classList.add("inputMatrix")

                    input.setAttribute("column", j)
                    input.setAttribute("line", i)

                    td.appendChild(input)
               }

               tr.appendChild(td)
          }

          table.appendChild(tr)
     }

     userMatrix.appendChild(table)

     if(!isRandomInput){
          let button = document.createElement("button")
          button.textContent = "Отсортировать"
          button.addEventListener("click", () => {userInputProgramContinue(sizeMatrix, maxlength)})
          userMatrix.appendChild(button)
     }
}