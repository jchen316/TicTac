$(document).ready(function(){
  let player1 = "X"
  let player2 = "O"

  let currentTurn = 1;
  let totalMoves = 0;

  let sqr = $('.square');
  let reset = $('#reset')
  let turn = $('#turn')
  let game = true;

  reset.on('click', (event)=> {
    totalMoves = 0;
    let temp = Array.prototype.slice.call($('.square'))
    temp.map( (square)=> {
      square.innerHTML = ""
      $('#winner').html("")
    })
    game = true;
  })

  sqr.on('click', function(e) {
    if(event.target.innerHTML === "" && game){
      totalMoves++
      if(currentTurn === 1) {

        event.target.innerHTML = player1;
        event.target.style.color = 'black';
        currentTurn++;
        turn.html("0's Turn")

      } else {

        event.target.innerHTML = player2;
        event.target.style.color = 'red';
        currentTurn--
        turn.html("X's Turn")
      }
    }
    if(checker()){
      let winner;
      if(currentTurn === 1){
        winner = player2
      } else {
        winner = player1
      }
      $('#winner').html(winner + " Wins");
      turn.html("")
      game = false;
    }
    if(totalMoves === 9) {
      if(!$('#winner')[0].innerHTML) {
        $('#winner').html("Its a tie!")
        game = false;
      }
    }
  })

  

  const checker = ()=> {
    
    if(totalMoves > 4) {
      const winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      let moves = Array.prototype.slice.call($('.square'))
      let result = moves.map( (square)=> {
        return square.innerHTML;
      })

      return winner.find( (combo)=> {
        if( result[combo[0]] !== "" && result[combo[1]] !== "" && result[combo[2]] !== "" && result[combo[0]] === result[combo[1]]
          && result[combo[0]] === result[combo[2]]){
          return true;
        } else {
          return false;
        }
      })
    }
  }

});