let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");

let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);




















































// let boxes=document.querySelectorAll(".box");
// let reset=document.querySelector("#reset");
// let msg = document.querySelector("#msg");
// let msgContainer = document.querySelector(".msgContainer");
// let newGame = document.querySelector("#new");
// let turnO=true;//playerX,player0
// const winpatterns=[
//         [0,1,2],
//         [0,3,6],
//         [0,4,8],
//         [1,4,7],
//         [2,5,8],
//         [2,4,6],
//         [3,4,5],
//         [6,7,8],
// ];

// boxes.forEach((box)=>{
//         box.addEventListener("click",()=>{
//                 console.log("box was clicked");
//                if(turnO){
//                 box.innerText="O";
//                 turnO=false;
//                }
//                else{
//                 box.innerText="X";
//                 turnO=true;
//                }
//                box.disabled=true;
//                checkWinner();
//         });
// });

// const resetGame=()=>{
//         turnO=true;
//         enableBoxes();
//         msgContainer.classList.add("hide");

// };
// const disableBoxes=()=> {
//         for(let box of boxes){
//                 box.disabled=true;
//         }
// };

// const enableBoxes=()=> {
//         for(let box of boxes){
//                 box.disabled=false;
//                 box.innerText="";
//         }
// };

// const showWinner=(Winner)=>{
//         msg.innerText=`Congratulations,Winner is ${Winner}`;
//         msgContainer.classList.remove("hide");
//         disableBoxes();
// };

// const checkWinner=() =>{
//         for(let pattern of winpatterns){
//                 let pos1val=boxes[pattern[0]].innerText;
//                 let pos2val=boxes[pattern[1]].innerText;
//                 let pos3val=boxes[pattern[2]].innerText;

//                 if(pos1val!="" && pos2val!="" && pos3val!=""){
//                         if(pos1val===pos2val && pos2val===pos3val) {
//                                 console.log("Winner",pos1val);
//                                 showWinner(pos1val);                        }
//                 }
//         }
// };

// new.addEventListener("click",resetGame);
// reset.addEventListener("click",resetGame);





























// let btn1=document.querySelector("#btn1");
// // btn1.onclick=(evt)=>{
// //         console.log(evt);
// //         console.log(evt.type);
// //         console.log(evt.target);
// //         console.log(evt.clientX,evt.clientY);   
        
// // }
// btn1.addEventListener("click",(evt)=>{
//         console.log("button was clicked");
//         console.log(evt);
// });
// //let div=document.querySelector("div");

// btn1.addEventListener("click",()=>{
//         console.log("button was clicked 534564");
// });
// //let div=document.querySelector("div");

















































// let newbtn=document.createElement("button");
// newbtn.innerText ="click me";
// newbtn.style.color="red";
// newbtn.style.backgroundColor="yellow";
// document.querySelector("body").prepend(newbtn);
























































































// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// console.log(newbtn);

// let div=document.querySelector("div");
// div.append(newbtn);
//   // div.style.fontSize="28px";




































// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"from Apna College Students";
// let d=document.querySelectorAll(".box");
// //console.dir( d[0]);
// // for(div of d){
// //         console.log(div);
// // }
// // d[0].innerText="new unique value 1";
// let idx=1;
// for(div of d){
//         div.innerText= `new unique value ${idx}`;
//         idx++;
// }








// console.log("apna college");
// console.log("i love java script");
// let s="batman";
// for(let i of s){
//         console.log(i);
// }
// let game=23;
// let user=prompt("enter no.");
// while(user!=game){
//         user=prompt("wrong");
// }
// console.log("congratulations u guess right");
// 
// let a=[1,2,3,4,5,6,];
// a.forEach(function printVal(val) {
//         console.log(val);
// });
// let h=document.getElementById("heading");
// console.dir(h)