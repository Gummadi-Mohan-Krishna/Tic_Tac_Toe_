let boxs=document.querySelectorAll(".box");
let result=document.querySelector(".result");
let xturn="x";
let x=0;
let y=0;
let winpattern=[
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let dis=document.getElementById("btn")

boxs.forEach(box =>{
    box.addEventListener("click",()=>{
        if(xturn){
            box.innerText='X';
            xturn=false;
            x++;
        }
        else{
            box.innerText='O';
            xturn=true;
            y++;
        }
        if(x>0|| y>0)
            dis.style.display="inline";
        box.disabled=true;
        if(x>2 || y>2){
            checkWinner();
        }
    })
})

block=()=>{
    boxs.forEach(box=>{
        box.disabled=true;
    })
}

displayWinner=(res)=>{
    result.innerText=res;
    
}

checkWinner = ()=>{
    let cnt=0
    for(let i=0;i<8;i++){
        if(boxs[winpattern[i][0]].innerText!="" && boxs[winpattern[i][1]].innerText!="" && boxs[winpattern[i][2]].innerText!=""){
            if(boxs[winpattern[i][0]].innerText===boxs[winpattern[i][1]].innerText && boxs[winpattern[i][1]].innerText===boxs[winpattern[i][2]].innerText){
                let res="Winner is "+boxs[winpattern[i][0]].innerText
                block();
                displayWinner(res);
            }
            else{
                cnt++;
            }
            if(cnt===8){
                let res="Game Draw";
                block();
                displayWinner(res);
            }
        }        
    } 
}
