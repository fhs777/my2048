
function setPosleft (i){
   return 18 + i *108;
}

function setPostop (i){
    return 18 + i *108;
 }

function setPosleft2 (el, i){
    el.style.left = (45 + 18 + i * 108) + "px";
}

function setPostop2 (el, i){
    el.style.top = (45 + 18 + i * 108) + "px";
}

function numcell_bgcolor(i){
    switch(i){
        case 2: return "#9B59B6"; break;
        case 4: return "#884EA0"; break;
        
        case 8: return "#76448A"; break;
        case 16: return "#7D3C98"; break;
        case 32: return "#6C3483"; break;
        case 64: return "#633974"; break;
        case 128: return "#5B2C6F"; break;
        case 256: return "#512E5F"; break;
        case 512: return "#4A235A"; break;
        case 1024: return "#BB8FCE"; break;
        case 2048: return "#C39BD3"; break;
        case 4096: return "#D7BDE2"; break;
        case 8192: return "#E8DAEF"; break;
    }
    return "black"

}

function numcell_color(i){
    if(i <= 4){
        return "#F39C12";
    }
    else{
        return "white";
    }

}

function noSpace(board){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}

function Canmovetop( board ){
    for(let j = 0; j < 4; j++){
        if(board[0][j] == 0 ){
            return true;
        }
    }
    for(let i = 1; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(board[i][j] == 0 || board[i][j] == board[i - 1][j]){
                return true;
            }
        }
    }
    return false;
}

function Canmovedown( board ){
    for(let j = 0; j < 4; j++){
        if(board[3][j] == 0 ){
            return true;
        }
    }
    for(let i = 2; i >= 0; i--){
        for(let j = 0; j < 4; j++){
            if(board[i][j] == 0 || board[i][j] == board[i + 1][j]){
                return true;
            }
        }
    }
    return false;
}

function Canmoveleft( board ){
    for(let i = 0; i < 4; i++){
        if(board[i][0] == 0 ){
            return true;
        }
    }
    for(let i = 0; i < 4; i++){
        for(let j = 1; j < 4; j++){
            if(board[i][j] == 0 || board[i][j] == board[i][j - 1]){
                return true;
            }
        }
    }
    return false;
}

function Canmoveright( board ){
    for(let i = 0; i < 4; i++){
        if(board[i][3] == 0 ){
            return true;
        }
    }
    for(let i = 0; i < 4; i++){
        for(let j = 2; j >= 0; j--){
            if(board[i][j] == 0 || board[i][j] == board[i][j + 1]){
                return true;
            }
        }
    }
    return false;
}

function nocellvertical(v, i, j, board){
    for(let y = v + 1; y < i; y++){
        if(board[y][j] !== 0){
            return false;
        }
    }
    return true;

}

function nocellhorizontal(v, i, j, board){
    for(let x = v + 1; x < j; x++){
        if(board[i][x] !== 0){
            return false;
        }
    }
    return true;

}

function noMove(board){
    if( Canmovedown( board ) || 
        Canmoveleft( board ) || 
        Canmovetop( board ) || 
        Canmoveright( board )){
            return false;
        }
        return true;
}