var board = new Array();
var score = 0;

window.onload = function() {
    newgame();
};

function newgame() {
    init();
    generateOneNumber();
    generateOneNumber();
}

function isgameover(){
    if( noSpace(board) && noMove(board)){
        gameover();
    }
}

function gameover(){
    alert("gameover");
}

function init(){

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            let s = document.getElementById("grid-cell-" + i + "-" + j);
            s.style.left = setPosleft(j) + "px";
            s.style.top = setPostop(i) + "px";
        }
    }

    for(let i = 0; i < 4; i++){
        board[i] = new Array();
        for(let j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }
    score = 0 ;
    updatenumbercell();
}

function updatenumbercell(){
    var container = document.getElementById("grid-container");
    var numbercells = document.querySelectorAll(".number-cell");
    let scorespan = document.getElementById("score");
    scorespan.textContent = score;
    numbercells.forEach(function f(itme, i ,list){
        itme.remove();
    })

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            console.log('<div class="number-cell" id="grid-cell-' + i + '-' + j + '"> </div>');
            let numbercell = document.createElement("div");
            numbercell.setAttribute("class","number-cell");
            numbercell.setAttribute("id","number-cell-" + i + "-" + j);
            container.append(numbercell);

            if(board[i][j] == 0){
                numbercell.style.left = (setPosleft(j) + 45) + "px";
                numbercell.style.top = (setPostop(i) + 45) + "px";
                numbercell.style.width = 0;
                numbercell.style.height = 0;
            }
            else{
                numbercell.style.left = setPosleft(j) + "px";
                numbercell.style.top = setPostop(i)  + "px";
                numbercell.style.width = "90px";
                numbercell.style.height = "90px";
                numbercell.textContent = board[i][j];
                numbercell.style.backgroundColor = numcell_bgcolor(board[i][j]);
                numbercell.style.color = numcell_color(board[i][j]);
            }
           
        }
    }
}

function generateOneNumber(){
    if(noSpace(board)){
        return false;
    }
    let x = Math.floor(Math.random()*4);
    let y = Math.floor(Math.random()*4);

    while(true){
        if(board[x][y] == 0) {
              break;
         }
        else {
             x = Math.floor(Math.random()*4);
             y = Math.floor(Math.random()*4);
            
        }
    }
    board[x][y] = Math.random() < 0.5 ? 2 : 4;
    showanimation(board[x][y], x, y);
}

document.addEventListener('keydown', function (e) {
    switch (e.keyCode){
        case 38://上
            console.log("up");
            if(movetop()){
                setTimeout("generateOneNumber()",350);
                setTimeout("isgameover()",410);
            }
            break;
        case 40://下
            if(movedown()){
                setTimeout("generateOneNumber()",350);
                setTimeout("isgameover()",410);
            }
            break;
        case 37://左
             if(moveleft()){
                setTimeout("generateOneNumber()",350);
                setTimeout("isgameover()",410);
            }
            break;
        case 39://右
            if(moveright()){
                setTimeout("generateOneNumber()",350);
                setTimeout("isgameover()",410);
            }
            break;
    }
  }, false);

function movetop(){
    if(!Canmovetop( board )){
        return false;
    }

    for (let i = 1; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(board[i][j] == 0){
                continue;
            }
            for (v = 0; v < i; v++){
                if(board[v][j] == 0 && nocellvertical(v, i, j, board)){
                    board[v][j] = board[i][j];
                    board[i][j] = 0;
                    console.log(v+" "+i+" "+j);
                    showtopanimation(v, i, j);
                    break;

                }
                else if(board[v][j] == board[i][j] && nocellvertical(v, i, j, board)){
                    board[v][j] += board[i][j];
                    board[i][j] = 0;
                    score += board[v][j];
                    showtopanimation(v, i, j);
                    break;
                }
               
            }
        }
    }
    setTimeout("updatenumbercell()",320);
    return true;
}

function movedown(){
    if(!Canmovedown( board )){
        return false;
    }

    for (let i = 2; i >= 0; i--){
        for(let j = 0; j < 4; j++){
            if(board[i][j] == 0){
                continue;
            }
            for (v = 3; v > i; v--){
                if(board[v][j] == 0 && nocellvertical(i, v, j, board)){
                    board[v][j] = board[i][j];
                    board[i][j] = 0;
                    console.log(v+" "+i+" "+j);
                    showtopanimation(v, i, j);
                    break;

                }
                else if(board[v][j] == board[i][j] && nocellvertical(i, v, j, board)){
                    board[v][j] += board[i][j];
                    score += board[v][j];
                    board[i][j] = 0;
                    showtopanimation(v, i, j);
                    break;
                }
               
            }
        }
    }
    setTimeout("updatenumbercell()",300);
    return true;
}

function moveleft(){
    if(!Canmoveleft( board )){
        return false;
    }

    for (let i = 0; i < 4; i++){
        for(let j = 1; j < 4; j++){
            if(board[i][j] == 0){
                continue;
            }
            for (v = 0; v < j; v++){
                if(board[i][v] == 0 && nocellhorizontal(v, i, j, board)){
                    board[i][v] = board[i][j];
                    board[i][j] = 0;
                    console.log(v+" "+i+" "+j);
                    showtopanimation2(v, i, j);
                    break;

                }
                else if(board[i][v] == board[i][j] && nocellhorizontal(v, i, j, board)){
                    board[i][v] += board[i][j];
                    board[i][j] = 0;
                    score += board[i][v];
                    showtopanimation2(v, i, j);
                    break;
                }
               
            }
        }
    }
    setTimeout("updatenumbercell()",300);
    return true;
}

function moveright(){
    if(!Canmoveright( board )){
        return false;
    }

    for (let i = 0; i < 4; i++){
        for(let j = 2; j >= 0; j--){
            if(board[i][j] == 0){
                continue;
            }
            for (v = 3; v > j; v--){
                if(board[i][v] == 0 && nocellhorizontal(j, i, v, board)){
                    board[i][v] = board[i][j];
                    board[i][j] = 0;
                    console.log(v+" "+i+" "+j);
                    showtopanimation2(v, i, j);
                    break;

                }
                else if(board[i][v] == board[i][j] && nocellhorizontal(j, i, v, board)){
                    board[i][v] += board[i][j];
                    board[i][j] = 0;
                    score += board[i][v];
                    showtopanimation2(v, i, j);
                    break;
                }
               
            }
        }
    }
    setTimeout("updatenumbercell()",300);
    return true;
}

