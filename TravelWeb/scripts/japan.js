let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../asserts/japan2.avif') {
    myImage.setAttribute ('src','../asserts/japan3.avif');
  } else if (mySrc === '../asserts/japan3.avif'){
    myImage.setAttribute ('src','../asserts/japan4.avif');
  } else if (mySrc === '../asserts/japan4.avif'){
    myImage.setAttribute ('src','../asserts/japan5.avif');
  } else{
    myImage.setAttribute ('src','../asserts/japan2.avif');
  }
}