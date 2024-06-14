let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../asserts/newyork2.jpg') {
    myImage.setAttribute ('src','../asserts/newyork1.avif');
  } else if (mySrc === '../asserts/newyork1.avif'){
    myImage.setAttribute ('src','../asserts/newyork4.avif');
  } else if (mySrc === '../asserts/newyork4.avif'){
    myImage.setAttribute ('src','../asserts/newyork5.avif');
  } else{
    myImage.setAttribute ('src','../asserts/newyork2.jpg');
  }
}