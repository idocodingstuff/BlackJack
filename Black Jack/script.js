var gameStatus = 'play'
var bet = 0
var x = 0
var y = 0
var z = 0
var winType = ' '
var standing = false
var card1 = 0
var card2 = 0 
var dealer1 = 0
var playerCount = 0
var playerTotal = 0
var dealerTotal = 0
var dealerCount = 0
var playButton = 0
var outcomeText
var allCards = 0

function play() {
     console.log('play')
     x=100
     document.getElementById('currency').classList.remove('hidden')
     let play = document.getElementById("playButton")
     play.remove();
     dealerCards();
     betAmount();
}
function checkMoney() {
     console.log('checkMoney')
     alert('For a proper experience, please zoom in and out to fit the black border around your screen.')
     if (gameStatus !== 'game')
          setInterval(() => {
               document.getElementById('currency').innerHTML = '$' + x
          }, 1000)
}

function hit() {
     console.log('hit')
    if (gameStatus == 'game') {
      card1 = 
               Math.floor(Math.random() * 52)+ 1;
               placeCard1();
               check();
    } else {
         return;
    }
}

function dealerCards() {
     console.log('dealerCards')
     card2 = 
          Math.floor(Math.random() * 52)+ 1;
          placeCard2();
     card2 = 
          Math.floor(Math.random() * 52)+ 1;
          placeCard2();
          card.classList.add("card0")
          card.id = '2ndDealer'
}
var dealerDraws = setInterval(dealerDraw, 1000)

function dealerDraw() {
     console.log('dealerDraw')
          if (dealerTotal <= 17 && gameStatus == 'game' && standing == true) {
                  card2 = 
                  Math.floor(Math.random() * 52)+ 1;
                 placeCard2();
                 console.log('2222222222222', dealerTotal)
          } else if (dealerTotal > 17 && gameStatus == 'game' && standing == true) {
               check();
          }
}

function check() {
     console.log('check')
     if(playerCount == 5 && playerTotal < 22) {
          winType = '5CC'
          outcomeText = 'Five Card Charlie!'
          document.getElementById('outcome').style.width = '1200px'
          return win();
     } else if (playerTotal == 21 && standing !== true) {
          return stands();
     } else if (playerTotal > 21) {
          winType == 'lose'
          document.getElementById('outcome').style.width = '600px'
          return lose();
     } else if (dealerTotal > playerTotal && standing == true && dealerTotal < 22) {
          winType == 'lose'
          return lose();
     } else if (playerTotal == 21 && dealerTotal < playerTotal && standing == true) {
          winType = 'blackJack'
          outcomeText = 'Blackjack!'
          document.getElementById('outcome').style.width = '700px'
          return win();
     } else if (dealerTotal == playerTotal && standing == true) {
          winType = 'push'
          outcomeText = 'Push'
          document.getElementById('outcome').style.width = '300px'
          return win();
     } else if (dealerTotal > 21 && playerTotal < 21) {
          outcomeText = 'Dealer busted!'
          document.getElementById('outcome').style.width = '880px'
          winType = 'dealerBust'
          return win(); 
     } else if (playerTotal > dealerTotal && standing == true) {
          outcomeText = 'You win!'
          document.getElementById('outcome').style.width = '600px'
          winType = 'win'
          return win(); 
     }
}

function calculate() {
     console.log('calculate')
     if (winType == 'blackJack') {
          z = y*3
          x = x+z
     } else if (winType == '5CC') {
          z = y*2.5
          x = x+z
     } else if (winType == 'push') {
          z = 0
     } else if (winType == 'lose') {
          z = y * 1
          x = x-z
     } else if (winType == 'dealerBust' || winType == 'win') {
          z = y*2
          x = x+z
     }
}

function replayButton() {
     console.log('replayButton')
     replay = document.getElementById('replay')
     replay.style.top = '-1500px'
}

function replayFunc() {
     console.log('replayFunc')
     winType = ' '
     playerTotal = 0
     dealerTotal = 0
     playerCount = 0
     times = 0
     delCard = document.getElementById('card')
     while (allCards > 1) {
          delCard = document.getElementById('card')
          delCard.remove()
          allCards--
          console.log(allCards)
     }
     delCard2 = document.getElementById('2ndDealer')
     delCard2.remove()
     allCards = 0
     gameStatus = 'play'
     winscreen = document.getElementById('winscreen')
     winscreen.classList.remove('win')
     document.getElementById('outcome').innerHTML = ' ';
     document.getElementById('outcome2').innerHTML = ' ';var gameStatus = 'play'
     bet = 0
     y = 0
     z = 0
     winType = ' '
     standing = false
     card1 = 0
     card2 = 0 
     dealer1 = 0
     playerCount = 0
     playerTotal = 0
     dealerTotal = 0
     playButton = 0
     outcomeText
     allCards = 0
     dealerCards();
     betAmount();
}

function betAmount() {
     console.log('betAmount')
     let bet = prompt('What is the amount you want to bet?')
     if (bet < x) {
          y = bet
          gameStatus = 'game' 
          playGame()
     } else if (bet >= x || bet == 0 || bet == ' ') {
          alert('Invalid bet amount, please try agian')
          betAmount();
     }
}

function playGame() {
     console.log('playGame')
     let hit = document.getElementById("hit")
     hit.classList.remove('hidden')
     hit.className = 'btn btn-secondary'
     hit.innerHTML = 'Hit'
     hit.style.width = '100px'
     hit.style.height = '80px'
     hit.style.fontSize = '3em'
     let stand = document.getElementById("stand")
     stand.classList.remove('hidden')
     stand.innerHTML = 'Stand'
     stand.className = 'btn btn-danger'
     stand.style.width = '100px'
     stand.style.height = '80px'
     stand.style.fontSize = '2em'
}

function win() {
     console.log('win')
     gameStatus = 'win'
     calculate();
     winscreen.className = 'win';
     document.getElementById('outcome').innerHTML = outcomeText;
     outcome.style.color = "black";
     document.getElementById('outcome2').innerHTML = '+' + z
     replayButton();
}

function lose() {
     console.log('lose')
     gameStatus = 'win'
     winType = 'lose'
     calculate();
     winscreen.className = 'win'
     document.getElementById('outcome').innerHTML = 'You lose!'
     outcome.style.color = "black";
     document.getElementById('outcome2').innerHTML = '-' + y 
     replayButton();
}

function stands() {
     console.log('stands')
     standing = true
     document.getElementById('2ndDealer').classList.remove('card0')
     console.log(dealerTotal, 'beans what the fuq')
     dealerDraw();
}

function placeCard1() {
     console.log(card1)
     if (standing == false) {
          if (card1 == 1 || 14 || 27 || 40) {
               card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               card.id = 'card'
               allCards++
                   if(2 > (playerCount)) {
                    playerTotal+=11;
                    playerCount++
                } else if(2 >= (playerCount)) {
                    playerTotal+=1;
                    playerCount++
                }
               } else if (card1 == 2 || 15 || 28 || 41) {
                card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=2;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 3 || 16 || 29 || 42) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=3;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 4 || 17 || 30 || 45) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=4;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 5 || 18 || 31 || 46) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=5;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 6 || 19 || 32 || 47) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=6;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 7 || 20 || 33 || 48) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=7;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 8 || 21 || 34 || 47) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=8;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 9 || 22 || 35 || 48) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=9;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 10 || 23 || 36 || 49) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=10;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 11 || 24 || 37 || 50) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=10;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 12 || 25 || 38 || 51) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=10;
               playerCount++
               allCards++
               card.id = 'card'
               } else if (card1 == 13 || 26 || 39 || 52) {
                    card = document.createElement("div")
               document.getElementById('player').appendChild(card)
               card.className = 'card' + card1
               card.style.height = '250px'
               card.style.width = '150px'
               card.style.position = 'relative'
               card.style.top = '100px'
               card.style.padding = '15px'
               playerTotal+=10;
               playerCount++
               allCards++
               card.id = 'card'
          }
     }
}
//=============================================================================================================
//=============================================================================================================
//=============================================================================================================
//=============================================================================================================
//=============================================================================================================
function placeCard2() {
     console.log(card2)
     if (card2 == 1 || 14 || 27 || 40) {
          card = document.createElement("div")
          document.getElementById('dealer').appendChild(card)
          card.className = 'card' + card1
          card.style.height = '250px'
          card.style.width = '150px'
          card.style.position = 'relative'
          card.style.top = '100px'
          card.style.padding = '15px'
          card.id = 'card'
          allCards++
          dealerCount++
          if(2 > (dealerCount)) {
               dealerTotal+=11;
          } else if(2 >= (dealerCount)) {
               dealerTotal+=1;
          }
    } else if (card2 == 2 || 15 || 28 || 41) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=2;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 3 || 16 || 29 || 42) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=3;
        allCards++
        dealerCount++
        card.id = 'card'
    } else if (card2 == 4 || 17 || 30 || 43) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=4;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 5 || 18 || 31 || 44) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=5;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 6 || 19 || 32 || 45) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=6;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 7 || 20 || 33 || 46) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=7;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 8 || 21 || 34 || 47) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=8;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 9 || 22 || 35 || 48) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        playerTotal+=9;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 10 || 23 || 36 || 49) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 11 || 24 || 37 || 50) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 12 || 25 || 38 || 51) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 13 || 26 || 39 || 52) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card1
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     }
}
