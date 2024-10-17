let boxes = document.querySelectorAll(".btn");
let newGame = document.querySelector("#newGameBtn");
let resetGame = document.querySelector(".reset_btn");
let winningMsg = document.querySelector(".winning_msg")

let winningPatterns = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
]
let turn0= true;
let counter = 0;

boxes.forEach((button) =>{
  button.addEventListener("click",()=>{
    if(turn0===true){
      button.innerText="O";
      turn0=false;
    }else{
      button.innerText="X";
      turn0=true;
    } 
    button.disabled=true;
    counter = counter+1;
    checkTheWinner();
  });
});

let disableButton=()=>{
  for(let button of boxes){
    button.disabled=true;
  }
}
let enableButton=()=>{
  for(let button of boxes){
  button.disabled=false;
  }
}
//let showWinningMsg = (winner) => {
//   winningMsg.innerText=`congratulations!! The winner is ${winner}`
//    winningMsg.classList.remove('hide');
//}
let isWinnerDeclared = false;
const checkTheWinner =()=>{
  for(let pattern of winningPatterns){
    let positionValue1= boxes[pattern[0]].innerText;
    let positionValue2= boxes[pattern[1]].innerText;
    let positionValue3= boxes[pattern[2]].innerText;
    if(positionValue1!="" && positionValue2!="" && positionValue3!=""){
      if(positionValue1===positionValue2 && positionValue2===positionValue3){
          let winner = positionValue1;
          winningMsg.innerText=`congratulations!! The winner is ${winner}`
          winningMsg.classList.remove('hide');
          console.log(`winner is ${winner}`);
          isWinnerDeclared = true;
          disableButton();
        } else if(counter === 9 && !isWinnerDeclared) {
          winningMsg.innerText=" It's tie!!"
          winningMsg.classList.remove('hide');
          disableButton();
        }
      }
    };
  }
newGame.addEventListener("click",()=> {
  winningMsg.classList.add('hide');
  boxes.forEach((button) =>{
    button.innerText="";
    enableButton();
    checkTheWinner();
  });
});

newGame.addEventListener("click", reset);
resetGame.addEventListener("click", reset);

function reset(){
  winningMsg.classList.add('hide');
  boxes.forEach((button) =>{
    button.innerText="";
    enableButton();
    checkTheWinner();
  })
}