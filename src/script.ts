import './style.scss'

import six_hearts from '/src/img/6 черви.png'
import seven_hearts from '/src/img/7 черви.png'
import eight_hearts from '/src/img/8 черви.png'
import nine_hearts from '/src/img/9 черви.png'
import ten_hearts from '/src/img/10 черви.png'
import J_hearts from '/src/img/валет черви.png'
import Q_hearts from '/src/img/дама черви.png'
import K_hearts from '/src/img/король черви.png'
import A_hearts from '/src/img/туз черви.png'

import six_diamonds from '/src/img/6 бубны.png'
import seven_diamonds from '/src/img/7 бубны.png'
import eight_diamonds from '/src/img/8 бубны.png'
import nine_diamonds from '/src/img/9 бубны.png'
import ten_diamonds from '/src/img/10 бубны.png'
import J_diamonds from '/src/img/валет бубны.png'
import Q_diamonds from '/src/img/дама бубны.png'
import K_diamonds from '/src/img/король бубны.png'
import A_diamonds from '/src/img/туз бубны.png'

import six_clubs from '/src/img/6 крести.png'
import seven_clubs from '/src/img/7 крести.png'
import eight_clubs from '/src/img/8 крести.png'
import nine_clubs from '/src/img/9 крести.png'
import ten_clubs from '/src/img/10 крести.png'
import J_clubs from '/src/img/валет крести.png'
import Q_clubs from '/src/img/дама крести.png'
import K_clubs from '/src/img/король крести.png'
import A_clubs from '/src/img/туз крести.png'

import six_spikes from '/src/img/6 пики.png'
import seven_spikes from '/src/img/7 пики.png'
import eight_spikes from '/src/img/8 пики.png'
import nine_spikes from '/src/img/9 пики.png'
import ten_spikes from '/src/img/10 пики.png'
import J_spikes from '/src/img/валет пики.png'
import Q_spikes from '/src/img/дама пики.png'
import K_spikes from '/src/img/король пики.png'
import A_spikes from '/src/img/туз пики.png'

import cover from '/src/img/cover.png'
import win_pic from '/src/img/celebration.png'
import lose_pic from '/src/img/loser.png'

let countdown__numbers: HTMLElement
let cardsAmount: number
let gameStatus
let timer: NodeJS.Timer
let userGameTime: string

const app = document.querySelector('.app') as HTMLElement

const startButton = document.querySelector('.button__start') as HTMLButtonElement

const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.content__level_box'
)

function clickButton(event: Event) {
    buttons.forEach((element: HTMLElement) => {
        element.classList.remove('active')
    })
    if (event.target instanceof HTMLDivElement) {
        const target: HTMLElement = event.target
        target.classList.add('active')
        if (target.classList.contains('easy')) {
            cardsAmount = 3
        } else if (target.classList.contains('medium')) {
            cardsAmount = 6
        } else if (target.classList.contains('hard')) {
            cardsAmount = 9
        }
    }
}

buttons.forEach((element: HTMLElement) => {
    element.classList.remove('active')
    element.addEventListener('click', clickButton)
})

startButton.addEventListener('click', (e) => {
    e.preventDefault()
    renderPlayField()
})

function renderTimer() {
    let startTime = new Date().getTime()
    timer = setInterval(function () {
        let currentTime = new Date().getTime()
        let gameTime = currentTime - startTime

        let minutes: number = Math.floor(
            (gameTime % (1000 * 60 * 60)) / (1000 * 60)
        )
        let seconds: number = Math.floor((gameTime % (1000 * 60)) / 1000)

        if (minutes < 10 && seconds < 10) {
            countdown__numbers.textContent = `0${minutes}.0${seconds}`
            userGameTime = `0${minutes}.0${seconds}`
        } else if (minutes < 10) {
            countdown__numbers.textContent = `0${minutes}.${seconds}`
            userGameTime = `0${minutes}.${seconds}`
        } else if (seconds < 10) {
            countdown__numbers.textContent = `${minutes}.0${seconds}`
            userGameTime = `${minutes}.0${seconds}`
        } else {
            countdown__numbers.textContent = `${minutes}.${seconds}`
            userGameTime = `${minutes}.${seconds}`
        }
    }, 1000)
}

function renderTopContent(container: HTMLElement) {
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
            img: six_hearts,
        },
        {
            name: '7 черви',
            img: seven_hearts,
        },
        {
            name: '8 черви',
            img: eight_hearts,
        },
        {
            name: '9 черви',
            img: nine_hearts,
        },
        {
            name: '10 черви',
            img: ten_hearts,
        },
        {
            name: 'валет черви',
            img: J_hearts,
        },
        {
            name: 'дама черви',
            img: Q_hearts,
        },
        {
            name: 'король черви',
            img: K_hearts,
        },
        {
            name: 'туз черви',
            img: A_hearts,
        },
        {
            name: '6 бубны',
            img: six_diamonds,
        },
        {
            name: '7 бубны',
            img: seven_diamonds,
        },
        {
            name: '8 бубны',
            img: eight_diamonds,
        },
        {
            name: '9 бубны',
            img: nine_diamonds,
        },
        {
            name: '10 бубны',
            img: ten_diamonds,
        },
        {
            name: 'валет бубны',
            img: J_diamonds,
        },
        {
            name: 'дама бубны',
            img: Q_diamonds,
        },
        {
            name: 'король бубны',
            img: K_diamonds,
        },
        {
            name: 'туз бубны',
            img: A_diamonds,
        },
        {
            name: '6 крести',
            img: six_clubs,
        },
        {
            name: '7 крести',
            img: seven_clubs,
        },
        {
            name: '8 крести',
            img: eight_clubs,
        },
        {
            name: '9 крести',
            img: nine_clubs,
        },
        {
            name: '10 крести',
            img: ten_clubs,
        },
        {
            name: 'валет крести',
            img: J_clubs,
        },
        {
            name: 'дама крести',
            img: Q_clubs,
        },
        {
            name: 'король крести',
            img: K_clubs,
        },
        {
            name: 'туз крести',
            img: A_clubs,
        },
        {
            name: '6 пики',
            img: six_spikes,
        },
        {
            name: '7 пики',
            img: seven_spikes,
        },
        {
            name: '8 пики',
            img: eight_spikes,
        },
        {
            name: '9 пики',
            img: nine_spikes,
        },
        {
            name: '10 пики',
            img: ten_spikes,
        },
        {
            name: 'валет пики',
            img: J_spikes,
        },
        {
            name: 'дама пики',
            img: Q_spikes,
        },
        {
            name: 'король пики',
            img: K_spikes,
        },
        {
            name: 'туз пики',
            img: A_spikes,
        },
    ]

    const range: number = 35

    let m: number[] = []
    let randomCardsIndex: number[] = []
    for (let i = 0; i < cardsAmount; ++i) {
        let r: number = Math.floor(Math.random() * (range - i))
        randomCardsIndex.push((r in m ? m[r] : r) + 1)
        randomCardsIndex.push((r in m ? m[r] : r) + 1)
        let l = range - i - 1
        m[r] = l in m ? m[l] : l
    }

    function shuffle(array: Array<number>) {
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
        card.setAttribute('name', `${cardList[j].img}`)
        playField.appendChild(card)
    }

    const cards = document.querySelectorAll('.card')

    function closeCards() {
        for (let i = 0; i < cardsAmount * 2; i++) {
            cards[i].setAttribute('src', cover)
        }
        renderTimer()
        compareTwoCards()
    }
    setTimeout(closeCards, 5000)

    function compareTwoCards() {
        let clicks = 0

        let cardOne: HTMLElement
        let cardOneId: String
        let cardOneIndex: number = 0

        let cardTwo: HTMLElement
        let cardTwoId: String
        let cardTwoIndex: number = 0
        let win: number = 0

        playField.addEventListener('click', function (event: Event) {
            if (event.target instanceof HTMLDivElement) {
                let index: number = [...this.children].findIndex(
                    (e) => e == event.target
                )

                clicks = clicks + 1
                if (clicks === 1) {
                    cardOne = event.target
                    cardOneId = event.target.id
                    cardOneIndex = index
                }
                if (clicks === 2) {
                    cardTwo = event.target
                    cardTwoId = event.target.id
                    cardTwoIndex = index

                    if (
                        cardOneId == cardTwoId &&
                        cardOneIndex !== cardTwoIndex
                    ) {
                        cardOne.classList.add('.card__open')
                        cardTwo.classList.add('.card__open')
                        win = win + 1
                    } else {
                        setTimeout(lose, 1000)
                    }
                }
                if (clicks > 1) {
                    clicks = 0
                }
                if (win === cardsAmount) {
                    gameStatus = 'win'
                    renderFinalScreen(gameStatus)
                }
            }
        })

        function lose() {
            gameStatus = 'lose'
            renderFinalScreen(gameStatus)
        }

        cards.forEach((card) => {
            card.addEventListener('click', (e: Event) => {
                if (e.target instanceof HTMLImageElement) {
                    let cardName = e.target.name
                    e.target.setAttribute('src', cardName)
                }
            })
        })
    }
}

function renderFinalScreen(result: String) {
    countdown__numbers.textContent = '00.00'
    clearInterval(timer)
    const resultBackground = document.createElement('div')
    resultBackground.classList.add('result__background')

    const resultBox = document.createElement('div')
    resultBox.classList.add('result__box')

    const resultImg = document.createElement('img')
    resultImg.classList.add('result__img')

    const resultHeader = document.createElement('p')
    resultHeader.classList.add('result__header')

    if (result === 'win') {
        resultImg.setAttribute('src', win_pic)
        resultHeader.textContent = 'Вы выиграли!'
    } else if (result === 'lose') {
        resultImg.setAttribute('src', lose_pic)
        resultHeader.textContent = 'Вы проиграли!'
    }

    const resultTimebox = document.createElement('div')
    resultTimebox.classList.add('result__timebox')

    const resultTimeboxText = document.createElement('p')
    resultTimeboxText.classList.add('result__timebox_text')
    resultTimeboxText.textContent = 'Затраченное время'
    resultTimebox.appendChild(resultTimeboxText)

    const resultTimeboxTime = document.createElement('p')
    resultTimeboxTime.classList.add('result__timebox_time')
    resultTimeboxTime.textContent = userGameTime
    resultTimebox.appendChild(resultTimeboxTime)

    const resultButton = document.createElement('button')
    resultButton.classList.add('button', 'button__restart')
    resultButton.textContent = 'Играть снова'

    resultButton.addEventListener('click', () => {
        location.reload()
    })

    resultBox.appendChild(resultImg)
    resultBox.appendChild(resultHeader)
    resultBox.appendChild(resultTimebox)
    resultBox.appendChild(resultButton)

    app.appendChild(resultBackground)
    app.appendChild(resultBox)
}
