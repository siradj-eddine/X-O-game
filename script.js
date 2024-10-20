let result = document.querySelector('.result');

let turn='x'
let square=[];

function game(id){
    
  let square = document.getElementById(id);

  if(turn==='x'&& square.innerHTML==''){
    square.innerHTML=`<p class="text">X</p>`;
    turn='o';
    result.innerHTML=`<p class="text"><span>O</span> turn</p>`
    }else if(turn==='o'&& square.innerHTML==''){
        square.innerHTML=`<p class="text">O</p>`;
        turn='x';
        result.innerHTML=`<p class="text"><span>X</span> turn</p>`
    }
  winner()
}
function shorts(num1,num2,num3){
    result.innerHTML=` <span>${square[num1]}</span> <p class='text'>winner</p>`
    document.getElementById(`${num1}`).style.backgroundColor='blue'
    document.getElementById(`${num2}`).style.backgroundColor='blue'
    document.getElementById(`${num3}`).style.backgroundColor='blue'
}
function winner(){
    for(i=1;i<10;i++){
       square[i] = document.getElementById(`${i}`).innerHTML;
    }
    if(square[1]==square[2] && square[2]==square[3] && square[3]!=''){
        shorts(1,2,3);
    }else  if(square[4]==square[5] && square[5]==square[6] && square[6]!=''){
        shorts(4,5,6);
    }else  if(square[7]==square[8] && square[8]==square[9] && square[9]!=''){
        shorts(7,8,9);
    }else  if(square[1]==square[4] && square[4]==square[7] && square[7]!=''){
        shorts(1,4,7);
    }else  if(square[2]==square[5] && square[5]==square[8] && square[8]!=''){
        shorts(2,5,8);
    }else  if(square[3]==square[6] && square[6]==square[9] && square[9]!=''){
        shorts(3,6,9);
    }else  if(square[1]==square[5] && square[5]==square[9] && square[9]!=''){
        shorts(1,5,9);
    }else  if(square[3]==square[5] && square[5]==square[7] && square[7]!=''){
        shorts(3,5,7);
    }

}

function reset(){
    let squares =document.querySelectorAll('.square');
    squares.forEach(element => {
        element.innerHTML='';
        element.style.backgroundColor='black'
    });
    result.innerHTML=`<span class="text "><span>X O</span>  game <span>:)</span>`;
}


