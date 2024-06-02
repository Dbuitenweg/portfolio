// Get the modals
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
	
// Get the button that opens the modals
var project = document.getElementById("project");
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modals 
project.onclick = function() {
  modal.style.display = "block";
}

project1.onclick = function() {
    modal1.style.display = "block";
    modal1.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}

project2.onclick = function() {
    modal2.style.display = "block";
    modal2.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}



// When the user clicks on <span> (x), close the modals
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.position = '';
  document.body.style.top = '';
}

span1.onclick = function() {
    modal1.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
  }

  span2.onclick = function() {
    modal2.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  document.body.style.position = '';
  document.body.style.top = '';

  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  document.body.style.position = '';
  document.body.style.top = '';
  
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  document.body.style.position = '';
  document.body.style.top = '';
}