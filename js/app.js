var instagramSection = document.getElementsByClassName('instagram-section');

function instagramSectionDoubleHover() {
  if(instagramSection[0].getClientRects()[0].top < window.innerHeight / 2){
    instagramSection[0].style.background = 'rgba(0,0,0,1)';
    console.log('asd');
  }
}


window.addEventListener('scroll',()=>{
  instagramSectionDoubleHover();
});
