let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let turno = true;
let newBtn=document.querySelector("#new-btn");
let msgBox=document.querySelector(".msgbox");
let msg=document.querySelector("#msg");
const winPattern=[
    [0,1,2],
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turno=true;
    count=0;
    enableboxes();
    msgBox.classList.add("hide")

};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("clicked");
        if(turno){
            box.innerText="O";
            turno=false;
 }
else{
    box.innerText="x";
    turno=true;
    
   
}
box.disabled=true;
checkWinner();

    });

    
});
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner)=>{
    msg.innerText=`congratulation winner is ${winner}`;
    msgBox.classList.remove("hide");
    disableboxes();

};
const checkWinner=()=>{
    for( let pattern of winPattern)  {
        let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
 if(pos1Val != "" && pos2Val !="" && pos3Val !=""){

if (pos1Val=== pos2Val && pos2Val===pos3Val){
    console.log("winner",pos1Val)
    showwinner(pos1Val);
}
 }
    }
    

};
newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)