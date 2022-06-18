let b = document.getElementsByTagName('body')[0];
let child = b.getElementsByTagName('main')[0];
b.removeChild(child);
let newHeader = document.createElement('h1');
newHeader.textContent = "Aaron is the champion";
newHeader.setAttribute('id','victory');
b.append(newHeader);
