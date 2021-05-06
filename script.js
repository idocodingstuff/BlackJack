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
var InfoText = '<b>Welcome to Black Jack!</b><br> This game is all about numbers. There are 4 ways to win, 2 ways to lose and a draw.<br> <br><b>The Scores</b><br>The face value is the score. Royal cards give 10. Aces gives 11 if drawn within the first two cards and 1 if not.<br><br><b>Win Conditions</b><br> Five Card Charlie: Reach a total of five cards without going over the 21 amount limit.<br>Blackjack: You beat the dealer while having a score of 21.<br>Normal Win: Get a higher score than the delaer.<br>Dealer bust: When the dealer exceeds the 21 limit.<br><br><b>Lose Conditions</b><br>Player bust: Your score exceeds the 21 limit. <br>Standard loss: The dealer beats your score.<br><b>How To Play</b><br>To draw, press the "Hit" button. When you think you have a good enough score, press the "Stand" button.<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'

function info() {
     let print = document.getElementById('infoText')
     print.innerHTML = InfoText
     document.getElementById('winscreen').classList.add('win')
     document.getElementById('info').innerHTML = ('Close')
     document.getElementById('info').className = ('btn btn-danger')
     document.getElementById('info').addEventListener("click", infoClose)
     document.getElementById('info').removeEventListener("click", info)
     document.getElementById('info').style.top = '-2420px'
}

function infoClose() {
     let print = document.getElementById('infoText')
     print.innerHTML = ''
     document.getElementById('winscreen').classList.remove('win')
     document.getElementById('info').innerHTML = ('Info')
     document.getElementById('info').className = ('btn btn-primary')
     document.getElementById('info').addEventListener("click", info)
     document.getElementById('info').removeEventListener("click", infoClose)
     document.getElementById('info').style.top = '-1400px'
}

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
     alert('For a proper experience, please zoom in and out & increase/decrease the size of your browser to fit the black border around your screen.')
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
          if (card1 == 1 || card1 == 14 || card1 == 27 || card1 == 40 ) {
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
                   if(2 > playerCount) {
                    console.log('yup cock')
                    playerTotal+=11;
                    playerCount++
                } else if(2 <= playerCount)  {
                    playerTotal+=1;
                    playerCount++
                }
               } else if (card1 == 2 || card1 == 15 || card1 == 28 || card1 == 41) {
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
               } else if (card1 == 3 || card1 == 16 || card1 == 29 || card1 == 42) {
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
               } else if (card1 == 4 || card1 == 17 || card1 == 30 || card1 == 45) {
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
               } else if (card1 == 5 || card1 == 18 || card1 == 31 || card1 == 46) {
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
               } else if (card1 == 6 || card1 == 19 || card1 == 32 || card1 == 47) {
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
               } else if (card1 == 7 || card1 == 20 || card1 == 33 || card1 == 48) {
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
               } else if (card1 == 8 || card1 == 21 || card1 == 34 || card1 == 47) {
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
               } else if (card1 == 9 || card1 == 22 || card1 == 35 || card1 == 48) {
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
               } else if (card1 == 10 || card1 == 23 || card1 == 36 || card1 == 49) {
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
               } else if (card1 == 11 || card1 == 24 || card1 == 37 || card1 == 50) {
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
               } else if (card1 == 12 || card1 == 25 || card1 == 38 || card1 == 51) {
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
               } else if (card1 == 13 || card1 == 26 || card1 == 39 || card1 == 52) {
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
     if (card2 == 1 || card2 == 14 || card2 == 27 || card2 == 40) {
          card = document.createElement("div")
          document.getElementById('dealer').appendChild(card)
          card.className = 'card' + card2
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
    } else if (card2 == 2 || card2 == 15 || card2 == 28 || card2 == 41) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=2;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 3 || card2 == 16 || card2 == 29 || card2 == 42) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=3;
        allCards++
        dealerCount++
        card.id = 'card'
    } else if (card2 == 4 || card2 == 17 || card2 == 30 || card2 == 43) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=4;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 5 || card2 == 18 || card2 == 31 || card2 == 44) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=5;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 6 || card2 == 19 || card2 == 32 || card2 == 45) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=6;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 7 || card2 == 20 || card2 == 33 || card2 == 46) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=7;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 8 || card2 == 21 || card2 == 34 || card2 == 47) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=8;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 9 || card2 == 22 || card2 == 35 || card2 == 48) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        playerTotal+=9;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 10 || card2 == 23 || card2 == 36 || card2 == 49) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 11 || card2 == 24 || card2 == 37 || card2 == 50) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 12 || card2 == 25 || card2 == 38 || card2 == 51) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
        card.style.height = '250px'
         card.style.width = '150px'
        card.style.position = 'relative'
        card.style.top = '100px'
        card.style.padding = '15px'
        dealerTotal+=10;
        allCards++
        dealerCount++
        card.id = 'card'
     } else if (card2 == 13 || card2 == 26 || card2 == 39 || card2 == 52) {
          card = document.createElement("div")
        document.getElementById('dealer').appendChild(card)
        card.className = 'card' + card2
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
