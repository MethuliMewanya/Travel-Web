let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../asserts/paris3.avif') {
    myImage.setAttribute ('src','../asserts/banner1.jpg');
  } else if (mySrc === '../asserts/banner1.jpg'){
    myImage.setAttribute ('src','../asserts/paris5.avif');
  } else if (mySrc === '../asserts/paris5.avif'){
    myImage.setAttribute ('src','../asserts/paris6.avif');
  } else{
    myImage.setAttribute ('src','../asserts/paris3.avif');
  }
}