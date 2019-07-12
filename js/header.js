//opeing sign in and sign up modal
var modal1 = document.getElementById("sign_up_modal");
var modal2 = document.getElementById("sign_in_modal");
var NAM = document.getElementById("nam");//Not a member
// Get the button that opens the modal
var btn1 = document.getElementById("up_modal");
var btn2 = document.getElementById("in_modal");
var btn3 = document.getElementById("up_button");
// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

btn2.onclick = function() {
    modal2.style.display = "block";
  }
btn3.onclick = function(){
    modal1.style.display = "block";
}
  // When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}
NAM.onclick = function() {
    modal1.style.display = "block";
  }
