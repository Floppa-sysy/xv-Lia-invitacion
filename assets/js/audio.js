const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="♫ ON";

}else{

music.pause();

musicBtn.innerHTML="♫ OFF";

}

});
