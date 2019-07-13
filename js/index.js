// Get the create post modal
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the create post modal
var btn3 = document.getElementById("createPostBtn");

// Get the <span> element that closes the create post modal
var span3 = document.getElementById("closePost");

// When the user clicks the button, open the create post modal 
btn3.onclick = function () {
    createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the create post modal
span3.onclick = function () {
    createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the create post modal, close it
window.onclick = function (event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
}