const p1Button= document.querySelector('#p1Button');
const p2Button= document.querySelector('#p2Button');
const p1Display= document.querySelector('#p1Display');
const p2Display= document.querySelector('#p2Display');
const resetButton= document.querySelector('#reset');
const winningScoreSelector= document.querySelector('#playTo')
let p1score=0;
let p2score=0;
let winningScore=3;
let isGameOver = false;
p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1score+=1;
        p1Display.textContent= p1score;
    }
    if(p1score ===winningScore){    
        isGameOver =true;
        p1Display.classList.add('winner')
        p2Display.classList.add('loser')
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
})
p2Button.addEventListener('click',function(){
    if(!isGameOver){
    p2score+=1;
    p2Display.textContent= p2score;
    }
    if(p2score ===winningScore){    
        isGameOver =true;
        p2Display.classList.add('winner')
        p1Display.classList.add('loser')
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
})
winningScoreSelector.addEventListener('change',function(){
    winningScore =parseInt(this.value)
    reset();
})
resetButton.addEventListener('click',reset)
function reset (){
    isGameOver=false;
    p1score=0;
    p2score=0;
    p1Display.textContent =0;
    p2Display.textContent=0;
    p1Display.classList.remove('winner','loser')
    p2Display.classList.remove('loser','winner')
    p1Button.disabled=false;
    p2Button.disabled=false;
}
