const app = document.querySelector('.app')

const startButton = document.querySelector('.button__start')

const chooseLevelBox = document.querySelector('.content__level')

const easyButton = document.querySelector('.easy')
const mediumButton = document.querySelector('.medium')
const hardButton = document.querySelector('.hard')

let userLevel
let countdown__numbers

const buttons = document.querySelectorAll('.content__level_box')

const clickButton = function (event) {
    const target = event.target
    if (target.classList.contains('easy')) {
        userLevel = 1
        cardsAmount = 6
        console.log(userLevel)
    } else if (target.classList.contains('medium')) {
        userLevel = 2
        cardsAmount = 12
        console.log(userLevel)
    } else if (target.classList.contains('hard')) {
        userLevel = 3
        cardsAmount = 24
        console.log(userLevel)
    }
}
buttons.forEach((element) => {
    element.addEventListener('click', clickButton)
})

// easyButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     mediumButton.classList.remove('active')
//     hardButton.classList.remove('active')
//     easyButton.classList.add('active')
//     userLevel = 1
//     cardsAmount = 6
//     console.log(userLevel)
// })

// mediumButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     easyButton.classList.remove('active')
//     hardButton.classList.remove('active')
//     mediumButton.classList.add('active')
//     userLevel = 2
//     cardsAmount = 12
//     console.log(userLevel)
// })

// hardButton.addEventListener('click', (e) => {
//     easyButton.classList.remove('active')
//     mediumButton.classList.remove('active')
//     hardButton.classList.add('active')
//     e.preventDefault()
//     userLevel = 3
//     cardsAmount = 18
//     console.log(userLevel)
// })

startButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(userLevel)
    // renderPlayField();
    renderClosedCards()
})

function renderClosedCards() {
    app.textContent = ''

    renderTopContent(app)

    const playField = document.createElement('div')
    playField.classList.add('playField')

    //Таймер надо доработать - продумать логику его старта
    //и сделать так, чтобы каждое последующее нажатие не
    //запускало его заново
    playField.addEventListener('click', () => {
        let startTime = new Date().getTime()
        const timer = setInterval(function () {
            let currentTime = new Date().getTime()
            let gameTime = currentTime - startTime
            console.log(gameTime)
            let days = Math.floor(gameTime / (1000 * 60 * 60 * 24))
            let hours = Math.floor(
                (gameTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            let minutes = Math.floor(
                (gameTime % (1000 * 60 * 60)) / (1000 * 60)
            )
            let seconds = Math.floor((gameTime % (1000 * 60)) / 1000)

            countdown__numbers.textContent = `${minutes}.${seconds}`
        }, 1000)
        // renderPlayField()
    })

    for (let i = 0; i < cardsAmount; i++) {
        const card = document.createElement('div')
        card.classList.add('card', 'card__closed')
        playField.appendChild(card)
        app.appendChild(playField)
    }
}

function renderTopContent(container) {
    const topContent = document.createElement('div')
    topContent.classList.add('top')

    const countdown = document.createElement('div')
    countdown.classList.add('countdown')

    const countdown__info = document.createElement('div')
    countdown__info.classList.add('countdown__info')

    const countdown__minutes = document.createElement('p')
    countdown__minutes.classList.add('countdown__text')
    countdown__minutes.textContent = 'min'

    const countdown__seconds = document.createElement('p')
    countdown__seconds.classList.add('countdown__text')
    countdown__seconds.textContent = 'sec'

    countdown__numbers = document.createElement('p')
    countdown__numbers.classList.add('countdown__numbers')
    countdown__numbers.textContent = '00.00'

    countdown.appendChild(countdown__info)
    countdown.appendChild(countdown__numbers)
    countdown__info.appendChild(countdown__minutes)
    countdown__info.appendChild(countdown__seconds)

    const restartButton = document.createElement('button')
    restartButton.classList.add('button', 'button__restart')
    restartButton.textContent = 'Начать заново'

    restartButton.addEventListener('click', () => {
        location.reload()
    })

    topContent.appendChild(countdown)
    topContent.appendChild(restartButton)

    container.appendChild(topContent)
}

function renderPlayField() {
    app.textContent = ''

    renderTopContent(app)

    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = ['hearts', 'diamonds', 'clubs', 'spades']

    const playField = document.createElement('div')
    playField.classList.add('playField')

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            const card = document.createElement('div')
            card.classList.add('card')

            const cardRankTop = document.createElement('p')
            cardRankTop.classList.add('card__rank', 'card__rank_top')
            cardRankTop.textContent = ranks[j]

            const cardEmblemTop = document.createElement('img')
            cardEmblemTop.classList.add('card__emblem_top')
            cardEmblemTop.setAttribute('src', `img/${suits[i]}.png`)

            const cardEmblemCenter = document.createElement('img')
            cardEmblemCenter.classList.add('card__emblem_center')
            cardEmblemCenter.setAttribute('src', `img/${suits[i]}_center.png`)

            const cardEmblemBottom = document.createElement('img')
            cardEmblemBottom.classList.add('card__emblem_bottom')
            cardEmblemBottom.setAttribute('src', `img/${suits[i]}.png`)

            const cardRankBottom = document.createElement('p')
            cardRankBottom.classList.add('card__rank', 'card__rank_bottom')
            cardRankBottom.textContent = ranks[j]

            card.appendChild(cardRankTop)
            card.appendChild(cardEmblemTop)
            card.appendChild(cardEmblemCenter)
            card.appendChild(cardEmblemBottom)
            card.appendChild(cardRankBottom)
            playField.appendChild(card)
        }
    }

    // const cardEmblemTop = document.createElement("svg");
    // const cardEmblemCenter = document.createElement("svg");
    // const cardEmblemBottom = document.createElement("svg);

    // card.appendChild(cardEmblemTop);
    // card.appendChild(cardEmblemCenter);
    // card.appendChild(cardEmblemBotto);

    app.appendChild(playField)

    // if (level == 1) {
    //     renderCards(playField, 6);
    // } else if (level = 2) {
    //     renderCards(playField, 12)
    // } else if (level == 3) {
    //     renderCards(playField, 18);
    // } else {
    //     alert('Уровень не выбран')
    // }
}

//const cards = JSON.parse(data);

// function cardTemplateEngine(c)
// debugger;
//   return {
//     tag: "div"
//     cls: "ard",
//     content: [
//       {
//         tag: "",
//        cls: "card__suit",
//         content: .suits[1],
//       },
//       {
//         ag: "p",
//        cls: "card__rank",
//         content: .ranks[1],
//       },
//     ],
//   };
// }
// playield.appendChild(templateEngine(cards.map((c) => cardTemplateEngine(c))));
