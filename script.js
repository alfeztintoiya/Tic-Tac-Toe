let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

let turnO = true; //player 1 -> O
document.querySelector("#player1").style.boxShadow = "0 0 1rem rgba(255,0,0,1)";
let ans = document.querySelector("#answer");
const patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    ans.innerText="";
    ans.disabled=false;
    document.querySelector("#player1").style.boxShadow="0 0 1rem rgba(255,0,0,1)";
    document.querySelector("#player2").style.boxShadow="";
});

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){ //player O
             box.innerText = "X";
             turnO = false;
             document.querySelector("#player1").style.boxShadow = "";
             document.querySelector("#player2").style.boxShadow = "0 0 1rem rgba(255,0,0,1)";
        }
        else{ // player X
            box.innerText = "O";
            turnO = true;
            document.querySelector("#player2").style.boxShadow = "";
            document.querySelector("#player1").style.boxShadow = "0 0 1rem rgba(255,0,0,1)";
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () =>{
    
    for(let i=0;i<patterns.length;i++){
        let t1 = boxes[patterns[i][0]].innerText;
        let t2 = boxes[patterns[i][1]].innerText;
        let t3 = boxes[patterns[i][2]].innerText;
        if(t1!=="" && t1===t2 && t2===t3){
            if(turnO){
                ans.innerText = "Winner is Player 2"; 
            }
            else{
                ans.innerText = "Winner is Player 1";
            }
        }
    }
};