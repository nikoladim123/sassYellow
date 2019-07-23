var instagramSection = document.getElementsByClassName('instagram-section');

function instagramSectionDoubleHover() {
  if(instagramSection[0].getClientRects()[0].top < window.innerHeight / 2){
    instagramSection[0].style.background = 'rgba(0,0,0,1)';
    console.log('asd');
  }else{
    instagramSection[0].style.background = 'rgba(12,4,0,0.95)';
  }
}


window.addEventListener('scroll',()=>{
  instagramSectionDoubleHover();
});
