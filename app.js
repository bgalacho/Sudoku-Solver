const puzzleBoard = document.querySelector('#puzzle')
const buttonSolve = document.querySelector('#solve-button')
const squares = 81
const submision = []

for (let i = 0; i < squares; i++) {
     const inputElement = document.createElement('input')
     inputElement.setAttribute('type', 'number')
     inputElement.setAttribute('min', '1')
     inputElement.setAttribute('max', '9')
    
     puzzleBoard.appendChild(inputElement)

}

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if(input.value){
            submision.push(input.value)
        } else {
            submision.push('.')
        }
    })
}
const solve = () => {

    const options = {
      method: 'POST',
      url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '422d27a324mshfe46ed0520c8dbfp1738b9jsn68ef9a8fd558',
        'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
      },
      data: '{"input":[0,0,8,9,0,0,4,0,0,0,0,5,6,0,0,0,0,0,3,0,0,7,0,0,6,0,9,5,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,6,5,0,0,2,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,8,9,0,0,0,7,0,4,0,0,2,0,0]}'
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

buttonSolve.addEventListener('click', solve)