const showResult = (matrix) => {
     let result = document.getElementById("result")

     let table = document.createElement("table")

     let caption = document.createElement("caption")
     caption.textContent = "Отсортированная матрица"
     table.appendChild(caption)

     for (let i = -1; i < matrix.length; i++) {
          let tr = document.createElement("tr")

          for (let j = -1; j < matrix.length; j++) {
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
                    td.textContent = matrix[i][j]
               }

               tr.appendChild(td)
          }

          table.appendChild(tr)
     }

     result.appendChild(table)
}