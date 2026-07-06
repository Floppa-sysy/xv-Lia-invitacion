AOS.init({

duration:1200,
once:true

});

new Swiper(".swiper",{

loop:true,

autoplay:{

delay:3000,

},

speed:1000,

});

document
.getElementById("openInvitation")
.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});
