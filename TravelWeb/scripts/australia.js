let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../asserts/aus1.avif') {
    myImage.setAttribute ('src','../asserts/aus2.avif');
  } else if (mySrc === '../asserts/aus2.avif'){
    myImage.setAttribute ('src','../asserts/aus3.avif');
  } else if (mySrc === '../asserts/aus3.avif'){
    myImage.setAttribute ('src','../asserts/aus5.avif');
  } else{
    myImage.setAttribute ('src','../asserts/aus1.avif');
  }
}