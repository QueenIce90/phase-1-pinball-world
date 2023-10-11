let gamesArray
let currentlyDisplayedGame
// Challenge #1 

fetch(' http://localhost:3000/games')
.then(response => response.json())
.then(games => {
    gamesArray = games
    showGameDetail(games[0]) 

    games.forEach(game => gameDetail(game))
    

}) 

function gameDetail(game) {
    const newGameList = document.querySelector('.game-list')
    const h5Tag = document.createElement('h5')
    h5Tag.textContent = `${game.name} (${game.manufacturer_name})`
    newGameList.appendChild(h5Tag)
    //Challenge #3
    h5Tag.addEventListener('click',() => {
        showGameDetail(game)
    })
}



// Challenge #2
function showGameDetail(game) {
    currentlyDisplayedGame = game
    const detailImage = document.querySelector('#detail-image')
    detailImage.src = game.image
    const detailTitle = document.querySelector('#detail-title')
    detailTitle.textContent = game.name
    const detailHighScore = document.querySelector('detail-high-score')
    // detailHighScore.textContent = game.high_score
}
const highScoreForm = document.getElementById('high-score-form')
highScoreForm.addEventListener('submit',(event) => {
    event.preventDefault()
   const detailHighScore = document.querySelector('#detail-high-score')
   const scoreInput = document.querySelector('#score-input')
   detailHighScore.textContent = scoreInput.value 
   console.log()

})

