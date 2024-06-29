
    let startBtn = document.querySelector('.start-btn');
    let resetBtn = document.querySelector('.reset-btn');
    let card = document.querySelector('.card');
    let sums = document.querySelector('.sum');
    let messageEl = document.querySelector('.message-el');
    let addCard = document.querySelector('.add-card');
    let infoEl = document.querySelector('.info-el');

    let firstCard = Math.ceil((Math.random() * (11 - 1) + 1));
    let secondCard = Math.ceil((Math.random() * (11 - 1) + 1));
    let thirdCard = Math.ceil((Math.random() * (11 - 1) + 1));
    let mark = 21;
    let message = '';
    let sum = firstCard + secondCard + thirdCard;
    let cards = [firstCard, secondCard, thirdCard];
    let isAlive;
    let playerInfo = {
        name : "Elvis",
        chips : '$0'
    }

    function startGame() {
        
      if (sum < mark) {
        message = "Pick another card?";
        isAlive = true;
      } else if (sum === mark) {
        message = "You won a BlackJack!";
        isAlive = false;
        playerInfo.chips = '$100';
      } else {
        message = "You Lost! Game end.";
        isAlive = false;
      }
      infoEl.innerHTML = `${playerInfo.name}: ${playerInfo.chips}`;
    }

    function updateDisplay() {
      //card.innerHTML = cards.join(' + ');
      sums.innerHTML = sum;
      messageEl.innerHTML = message;
      console.log(card.innerHTML = cards.join('  '))
    }

    function add() {
      let newCard = Math.ceil((Math.random() * (11 - 1) + 1));
      cards.push(newCard);
      sum += newCard;
    }

    startBtn.addEventListener('click', () => {
      startGame();
      updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
      location.reload();
    });


    
    addCard.addEventListener('click', () => {
      if (isAlive) 
      {add();
      startGame();
      updateDisplay();
      } else {
        //messageEl.innerHTML = "Invalid";
    }
    });
    