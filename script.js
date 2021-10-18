const container = document.querySelector('.images');
const cards = [];
let pic1;
let pic2;
let points = 0;

let firstClick = true;


for (let i = 1; i <= 6; i++) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('borderDiv');
    const createImg = document.createElement('img');
    createImg.classList.add('memoryImg', 'hideImg')
    createImg.src = `./assets/${i}.png`;
    createDiv.appendChild(createImg)
    cards.push(createImg)
}

for (let i = 1; i <= 6; i++) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('borderDiv');
    const createImg = document.createElement('img');
    createImg.classList.add('memoryImg', 'hideImg')
    createImg.src = `./assets/${i}.png`;
    createDiv.appendChild(createImg)
    cards.push(createImg)
}
shuffle(cards);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

for (let index = 0; index < cards.length; index++) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('borderDiv');
    createDiv.appendChild(cards[index]);
    container.appendChild(createDiv)
    cards[index].addEventListener('click', () => {
        checkClick(cards[index]);
    });
};

const checkClick = (card) => {
    card.classList.add('showImg');
    if(firstClick) {
        pic1 = card;
        firstClick = !firstClick
    } else {
        pic2 = card;

        if(pic1.src == pic2.src) {
            points++
            document.querySelector('#points').textContent = 'Points: ' + points;
        } else {
            setTimeout(() => {
                pic1.classList.remove('showImg');
                pic2.classList.remove('showImg');
            }, 700);
        }
        firstClick = true;
    }  
        
};




