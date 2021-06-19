function showanimation(num, x, y){
      console.log("number-cell-" + x + "-" + y);
     let el = document.getElementById("number-cell-" + x + "-" + y);
     el.style.backgroundColor = numcell_bgcolor(num);
     el.style.color = numcell_color(num);
     el.textContent = num;

     el.animate(
        { 
          top: setPostop(x) + "px",
          height: '90px', 
          left: setPosleft(y) + "px",
          width: '90px',
          
          
      }
      , {
        duration: 50,
        fill: 'forwards',
      })
    
    //el.style.left = setPosleft(y) + "px";
    //el.style.top = setPostop(x) + "px";
   
}



function showtopanimation(v, i, j){
  let el = document.getElementById("number-cell-" + i + "-" + j);
  el.animate(
    { 
      top: setPostop(v) + "px",  
      left: setPosleft(j) + "px",
  }
  , {
    duration:  300,
    fill: 'forwards',
  })
}

function showtopanimation2(v, i, j){
  let el = document.getElementById("number-cell-" + i + "-" + j);
  el.animate(
    { 
      top: setPostop(i) + "px",  
      left: setPosleft(v) + "px",
  }
  , {
    duration:  300,
    fill: 'forwards',
  })
}