// letters is the array to search from, word is the word that we are looking for
const wordSearch = (letters, word) => {
    // this part checks horizontal
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    // this part checks verticle
    const transpose = function(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < i; j++) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        return matrix;
    }

    const swappedLetters = transpose(letters)
    const verticalJoin = swappedLetters.map(ls => ls.join(''))

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    return false;
}




module.exports = wordSearch