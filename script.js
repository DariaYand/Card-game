const app = document.querySelector('.app')

const startButton = document.querySelector('.button__start')

let countdown__numbers
let cardsAmount

const buttons = document.querySelectorAll('.content__level_box')

const clickButton = function (event) {
    const target = event.target
    if (target.classList.contains('easy')) {
        cardsAmount = 3
    } else if (target.classList.contains('medium')) {
        cardsAmount = 6
    } else if (target.classList.contains('hard')) {
        cardsAmount = 9
    }
}
buttons.forEach((element) => {
    element.addEventListener('click', clickButton)
})

startButton.addEventListener('click', (e) => {
    e.preventDefault()
    renderPlayField()
})

// function renderTimer() {

//     //Таймер надо доработать - продумать логику его старта
//     //и сделать так, чтобы каждое последующее нажатие не
//     //запускало его заново
//     // playField.addEventListener('click', () => {
//         // let startTime = new Date().getTime()
//         // const timer = setInterval(function () {
//         //     let currentTime = new Date().getTime()
//         //     let gameTime = currentTime - startTime
//         //     console.log(gameTime)
//         //     let days = Math.floor(gameTime / (1000 * 60 * 60 * 24))
//         //     let hours = Math.floor(
//         //         (gameTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         //     )
//         //     let minutes = Math.floor(
//         //         (gameTime % (1000 * 60 * 60)) / (1000 * 60)
//         //     )
//         //     let seconds = Math.floor((gameTime % (1000 * 60)) / 1000)

//         //     countdown__numbers.textContent = `${minutes}.${seconds}`
//         // }, 1000)

//     // })

//     for (let i = 0; i < cardsAmount; i++) {
//         const card = document.createElement('div')
//         card.classList.add('card', 'card__closed')
//         playField.appendChild(card)
//         app.appendChild(playField)
//     }
// }

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

    const cardList = [
        {
            name: '6 черви',
            img: 'img/6 черви.png',
        },
        {
            name: '7 черви',
            img: 'img/7 черви.png',
        },
        {
            name: '8 черви',
            img: 'img/8 черви.png',
        },
        {
            name: '9 черви',
            img: 'img/9 черви.png',
        },
        {
            name: '10 черви',
            img: 'img/10 черви.png',
        },
        {
            name: 'валет черви',
            img: 'img/валет черви.png',
        },
        {
            name: 'дама черви',
            img: 'img/дама черви.png',
        },
        {
            name: 'король черви',
            img: 'img/король черви.png',
        },
        {
            name: 'туз черви',
            img: 'img/туз черви.png',
        },
        {
            name: '6 бубны',
            img: 'img/6 бубны.png',
        },
        {
            name: '7 бубны',
            img: 'img/7 бубны.png',
        },
        {
            name: '8 бубны',
            img: 'img/8 бубны.png',
        },
        {
            name: '9 бубны',
            img: 'img/9 бубны.png',
        },
        {
            name: '10 бубны',
            img: 'img/10 бубны.png',
        },
        {
            name: 'валет бубны',
            img: 'img/валет бубны.png',
        },
        {
            name: 'дама бубны',
            img: 'img/дама бубны.png',
        },
        {
            name: 'король бубны',
            img: 'img/король бубны.png',
        },
        {
            name: 'туз бубны',
            img: 'img/туз бубны.png',
        },
        {
            name: '6 крести',
            img: 'img/6 крести.png',
        },
        {
            name: '7 крести',
            img: 'img/7 крести.png',
        },
        {
            name: '8 крести',
            img: 'img/8 крести.png',
        },
        {
            name: '9 крести',
            img: 'img/9 крести.png',
        },
        {
            name: '10 крести',
            img: 'img/10 крести.png',
        },
        {
            name: 'валет крести',
            img: 'img/валет крести.png',
        },
        {
            name: 'дама крести',
            img: 'img/дама крести.png',
        },
        {
            name: 'король крести',
            img: 'img/король крести.png',
        },
        {
            name: 'туз крести',
            img: 'img/туз крести.png',
        },
        {
            name: '6 пики',
            img: 'img/6 пики.png',
        },
        {
            name: '7 пики',
            img: 'img/7 пики.png',
        },
        {
            name: '8 пики',
            img: 'img/8 пики.png',
        },
        {
            name: '9 пики',
            img: 'img/9 пики.png',
        },
        {
            name: '10 пики',
            img: 'img/10 пики.png',
        },
        {
            name: 'валет пики',
            img: 'img/валет пики.png',
        },
        {
            name: 'дама пики',
            img: 'img/дама пики.png',
        },
        {
            name: 'король пики',
            img: 'img/король пики.png',
        },
        {
            name: 'туз пики',
            img: 'img/туз пики.png',
        },
    ]

    const range = 35

    let m = {}
    let randomCardsIndex = []
    for (let i = 0; i < cardsAmount; ++i) {
        let r = Math.floor(Math.random() * (range - i))
        randomCardsIndex.push((r in m ? m[r] : r) + 1)
        randomCardsIndex.push((r in m ? m[r] : r) + 1)
        let l = range - i - 1
        m[r] = l in m ? m[l] : l
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5)
    }

    shuffle(randomCardsIndex)

    const playField = document.createElement('div')
    playField.classList.add('playField')
    app.appendChild(playField)

    for (let i = 0; i < cardsAmount * 2; i++) {
        let card = document.createElement('img')
        card.classList.add('card')
        let j = randomCardsIndex[i]
        card.setAttribute('src', `${cardList[j].img}`)
        card.setAttribute('id', `${cardList[j].name}`)
        playField.appendChild(card)
    }

    const cards = document.querySelectorAll('.card')
    console.log(cards)

    function closeCards() {
        for (let i = 0; i < cardsAmount * 2; i++) {
            cards[i].setAttribute('src', 'img/рубашка.png')
        }
        compareTwoCards()
    }
    setTimeout(closeCards, 5000)

    function compareTwoCards() {
        let clicks = 0

        let cardOne
        let cardOneId
        let cardOneIndex = 0

        let cardTwo
        let cardTwoId
        let cardTwoIndex = 0
        let win = 0

        playField.addEventListener('click', function (evt) {
            let index = [...this.children].findIndex((el) => el == evt.target)

            clicks = clicks + 1
            if (clicks === 1) {
                cardOne = evt.target
                cardOneId = evt.target.id
                cardOneIndex = index
            }
            if (clicks === 2) {
                cardTwo = evt.target
                cardTwoId = evt.target.id
                cardTwoIndex = index

                if (cardOneId == cardTwoId && cardOneIndex !== cardTwoIndex) {
                    cardOne.classList.add('.card__open')
                    cardTwo.classList.add('.card__open')
                    win = win + 1
                    console.log('win')
                } else {
                    setTimeout(lose, 1000)
                }
            }
            if (clicks > 1) {
                clicks = 0
            }
            if (win === cardsAmount) {
                alert('Вы победили!')
            }
        })

        function lose() {
            console.log('lose')
            cardOne.setAttribute('src', 'img/рубашка.png')
            cardTwo.setAttribute('src', 'img/рубашка.png')
        }

        cards.forEach((card) => {
            card.addEventListener('click', (e) => {
                let cardId = e.target.id
                e.target.setAttribute('src', `img/${cardId}.png`)
                console.log(e.target.id)
            })
        })
    }
}
//
