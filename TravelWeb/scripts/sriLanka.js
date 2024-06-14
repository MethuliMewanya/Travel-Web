let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../asserts/srilanka5.avif') {
    myImage.setAttribute ('src','../asserts/srilanka1.jpg');
  } else if (mySrc === '../asserts/srilanka1.jpg'){
    myImage.setAttribute ('src','../asserts/srilanka2.jpg');
  } else if (mySrc === '../asserts/srilanka2.jpg'){
    myImage.setAttribute ('src','../asserts/srilanka3.jpg');
  } else{
    myImage.setAttribute ('src','../asserts/srilanka5.avif');
  }
}