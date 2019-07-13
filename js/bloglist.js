/* del() activates the modal that deletes the blog posts */
function del() {
  // Fetch the modal
  var modal = document.getElementById("del");
  // Display the modal to the user
  modal.style.display = "block";

  // Hides the modal if user clicks else where on the display
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

  }
}


/* hid() hides the modal that deletes the blog posts */
function hid() {
  // Hides the modal when user click on the 'No' button
  var btn = document.getElementsByClassName('modal')[2];
  btn.style.display = "none";

}