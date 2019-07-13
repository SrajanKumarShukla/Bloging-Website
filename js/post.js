// Makes the Save Button invisible by default
var btn = document.getElementById('save');
btn.style.display = "none";

/*  editContent() makes the blogs main content and heading
    editable to the user and outlines the editable portion
 */
function editContent(){
    // Makes the edit button invisible
    var edit_btn = document.getElementById('edit');
    edit_btn.style.display = "none";
    // Makes the save button visible
    var save_btn = document.getElementById('save');
    save_btn.style.display = "";
    // Puts a border to the content and heading and make them editable
    var para = document.getElementById('blogBody')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable','true')

    var para = document.getElementById('blogTitleNew')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable','true')

}

/*  saveContent() makes the blogs main content and heading
    un-editable to the user, saves the changes
    and remmoves the outlines of editable portion
 */
function saveContent(){
    // Makes the save button invisible
    var edit_btn = document.getElementById('save');
    edit_btn.style.display = "none";
    // akes the edit button visible
    var save_btn = document.getElementById('edit');
    save_btn.style.display = "";
    // Removes the border of the content and heading and make them un-editable
    var para = document.getElementById('blogBody')
    para.style.border = "none";
    para.setAttribute('contenteditable','false')

    var para = document.getElementById('blogTitleNew')
    para.style.border = "none";
    para.setAttribute('contenteditable','false')
}

/* like() counts the number of likes on a post
   and displays them on the page
*/
var likes = 0
function like(){
    // Fetch the like button action
    var btn = document.getElementById('like');
    // When Clicked changes the innerHTML of the button
    btn.innerHTML = 'Liked!';
    // Shows the number of likes and change the innerTEXT to nuber of likes
    var content = document.getElementById('liker');
    likes = likes + 1
    content.innerHTML = `${likes} person likes this!`;
}

/*  commetn() fetchs the new comment from comment field
    and places that on the top of comment section
*/
function comment(){
    // Fetch the new comment value
    var cmnt = document.getElementById('addComment').value;
    var holder= `<p class="newComment">${cmnt}</p>` // New coment template
    // Fetch the comment holder div
    var allComment = document.getElementById("newCommentHolder");
    // Add the new comment to the comment holder
    allComment.innerHTML = holder + allComment.innerHTML;
    // Reset the value of the comment holder
    document.getElementById('addComment').value = "";
    
}