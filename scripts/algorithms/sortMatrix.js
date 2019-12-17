const sortMatrix = (matrix, copyMatrix) => {
     let mx = [...matrix]
     let mxCopy = [...copyMatrix]

     for (let i = 0; i < mx.length - 1; i++) {
          for (let j = 0; j < mx[i].length; j++) {
               for (let k = 0; k < mx[i].length - i - 1; k++) {

                    if ((j + 1) % 2 == 1) {
                         if (mxCopy[k][j] > mxCopy[k + 1][j]) {
                              replaceElements(k, k + 1, j, mx, mxCopy);
                         }
                    } else {
                         if (mxCopy[k][j] < mxCopy[k + 1][j]) {
                              replaceElements(k, k + 1, j, mx, mxCopy);
                         }
                    }

               }
          }
     }

     return mx
}

const replaceElements = (k1, k2, j, mx, mxCopy) => {
     let t = mxCopy[k1][j];
     mxCopy[k1][j] = mxCopy[k2][j];
     mxCopy[k2][j] = t;

     let s = mx[k1][j];
     mx[k1][j] = mx[k2][j];
     mx[k2][j] = s;
}