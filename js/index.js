//on clicking all post button it leads to bloglist.html
var all_post=document.getElementById("all_post");
all_post.onclick=function(){
  window.location.href="html/bloglist.html";
}
//create post
var create_post=document.getElementById("create_post");
var modal1 = document.getElementById("sign_up_modal");
var span1 = document.getElementById("close1");
var btn3 = document.getElementById("up_button");
create_post.onclick = function() {
  modal1.style.display = "block";
}
btn3.onclick = function(){
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
//on clicking the logo it leads to homepage
var home=document.getElementById("logo");
home.onclick=function(){
    window.location.href="index.html";
}
//crete post
var create_post=document.getElementById("create_post");
var post_modal = document.getElementById("create_post_modal");
create_post.onclick=function(){
  post_modal.style.display="block";
}
var span3 = document.getElementById("close3");
span3.onclick = function() {
  post_modal.style.display = "none";
}
