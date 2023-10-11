

const navigationList = document.querySelector('.game-list');
const gameDetail = document.getElementsByClassName('game-detail')
const imageList = document.getElementById('detail-image');
const detailTitle = document.querySelector('#detail-title')
const detailTitleList = document.getElementById('detail-title')
const detailHighScore = document.getElementById('high-score-form')
const scoreInput = document.getElementById('score-input');


fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then (game => {
        game.forEach(game => showGamelist(game))

    })

    function showGamelist(game){
        const h5Tag = document.createElement('h5')
        h5Tag.textContent = game.name
        navigationList.appendChild(h5Tag)

    }