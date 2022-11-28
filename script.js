const cards = JSON.parse(data);

const app = document.querySelector('.app');

const startButton = document.querySelector('.content__button');

const chooseLevelBox = document.querySelector('.content__level');

const easyButton = document.querySelector('.easy');
const mediumButton = document.querySelector('.medium');
const hardButton = document.querySelector('.hard');

let userLevel;

easyButton.addEventListener('click', (e) => {
    e.preventDefault();
    easyButton.setAttribute('disabled', 'disabled');
    userLevel = 1;
    console.log(userLevel);
    easyButton.parentElement.removeChild(mediumButton);
    easyButton.parentElement.removeChild(hardButton);
});

mediumButton.addEventListener('click', (e) => {
    e.preventDefault();
    mediumButton.setAttribute('disabled', 'disabled');
    userLevel = 2;
    console.log(userLevel);
    mediumButton.parentElement.removeChild(easyButton);
    mediumButton.parentElement.removeChild(hardButton);
});

hardButton.addEventListener('click', (e) => {
    e.preventDefault();
    hardButton.setAttribute('disabled', 'disabled');
    userLevel = 3;
    console.log(userLevel);
    hardButton.parentElement.removeChild(easyButton);
    hardButton.parentElement.removeChild(mediumButton);
});

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(userLevel);
    renderPlayField(userLevel);
})


function renderCards(container, cardsNumber) {
    function beerTemplateEngine(card) {
        // debugger;
        return {
            tag: 'div',
            cls: 'card',
            content: [
                {
                    tag: 'p',
                    cls: 'card__suit',
                    content: card.suits.hearts,
                },
                {
                    tag: 'p',
                    cls: 'card__rank',
                    content: card.ranks.six,
                }
            ]
        }
    }
    container.appendChild(
        templateEngine(cards.map(card => beerTemplateEngine(card)))
    );
}



function renderPlayField(level) {
    app.textContent = '';
    const playField = document.createElement('div');
    app.appendChild(playField);
    if (level == 1) {
        renderCards(playField, 6);
    } else if (level == 2) {
        renderCards(playField, 12);
    } else if (level == 3) {
        renderCards(playField, 18);
    } else {
        alert('Уровень не выбран')
    }
}