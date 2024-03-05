score=0;
cross=true;

document.onkeydown = function(e){
    
    if(e.keyCode==38){
        scooter = document.querySelector('.scooter');
        scooter.classList.add('animateScooter')
        setTimeout(() => {
          scooter.classList.remove('animateScooter')
        },700 );
    }
    if(e.keyCode==39){
      scooter = document.querySelector('.scooter');
      scooterX = parseInt(window.getComputedStyle(scooter,null).getPropertyValue("left"));
      scooter.style.left = scooterX+120+'px';
  }
  if(e.keyCode==37){
    scooter = document.querySelector('.scooter');
    scooterX = parseInt(window.getComputedStyle(scooter,null).getPropertyValue("left"));
    scooter.style.left = scooterX-120+'px';
}
}

setInterval(() =>{
      scooter = document.querySelector('.scooter')
      gameOver = document.querySelector('.gameOver')
      truck = document.querySelector('.truck')

      sx = parseInt(window.getComputedStyle(scooter,null).getPropertyValue("left"));
      sy = parseInt(window.getComputedStyle(scooter,null).getPropertyValue("top"));

      tx = parseInt(window.getComputedStyle(truck,null).getPropertyValue("left"));
      ty = parseInt(window.getComputedStyle(truck,null).getPropertyValue("top"));

      offsetX = Math.abs(sx-tx)
      offsetY = Math.abs(sy-ty)
      if(offsetX<130 && offsetY<85){
        gameOver.style.visibility = "visible";
        truck.classList.remove("truckRn");
        scooter.classList.remove("animateScooter")
        scooter.style.left=20+'px';
      }
      else if(offsetX<150&&cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
          cross=true;
        },1000)
       
        setTimeout(() => {
          aniDur = parseFloat(window.getComputedStyle(truck,null).getPropertyValue("animation-duration"));
        newDur = aniDur - 0.1
        truck.style.animationDuration = newDur+'s';
        },800);
        
        
      }
},100)

function updateScore(score){

  newScore.innerHTML = "Your Score : "+score;
}