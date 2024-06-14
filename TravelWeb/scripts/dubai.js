let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../asserts/dubai2.avif') {
    myImage.setAttribute ('src','../asserts/dubai3.avif');
  } else if (mySrc === '../asserts/dubai3.avif'){
    myImage.setAttribute ('src','../asserts/dubai4.avif');
  } else if (mySrc === '../asserts/dubai4.avif'){
    myImage.setAttribute ('src','../asserts/dubai5.avif');
  } else{
    myImage.setAttribute ('src','../asserts/dubai2.avif');
  }
}