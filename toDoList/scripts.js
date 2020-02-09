var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var del = document.createElement("trash");
    span.className = "close";
    del.className="fas fa-trash-alt"
    span.appendChild(del);
    var check = document.createElement("INPUT");
    check.type="checkbox"
    check.className="chkbox"
    myNodelist[i].appendChild(check);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var chkb = document.getElementsByClassName("chkbox");
for (i = 0; i < close.length; i++) {
    chkb[i].onclick = function() {
    var div = this.parentElement;
    div.style="background-color:blue;";
  }
}

// var list = document.querySelector('ul');
// list.addEventListener('click', 
// function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');


//   }
// }, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var del = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(del);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}