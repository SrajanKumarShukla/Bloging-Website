//edit and save button
var edit_save=document.getElementById("edit_save");
var blogBody=document.getElementById("blogBody");
edit_save.onclick=function(){
    if(edit_save.innerHTML=="Edit"){
    edit_save.innerHTML="Save";
    blogBody.innerHTML="<textarea "+"id="+"text_area"+">"+blogBody.innerHTML+"</textarea>";
    }else{
        edit_save.innerHTML="Edit";
        blogBody.innerHTML=document.getElementById("text_area").value;
    }
}

//Like button
var like=document.getElementById("like");
var person_count=document.getElementById("person_count");
like.onclick=function(){
    like.innerHTML="Liked!";
    document.getElementById("first_person").style.display="none";
    if(person_count.innerHTML==""){
        person_count.innerHTML="1 person likes this!";
    }
    else{
        var n=parseInt(person_count.innerHTML);
        if(person_count.innerHTML=="1 person likes this!")
        person_count.innerHTML=(n+1)+" people have liked this!";
        else
        person_count.innerHTML=(n+1)+" people have liked this!";

        
    }
}
//comment
var comment_btn=document.getElementById("comment_button");
var comment_inp=document.getElementById("comment_input");
var comment_box=document.getElementById("comment_box");
comment_btn.onclick=function(){
    var val=comment_inp.value;
    if(val!=""){
        comment_box.style.display="block";
        comment_box.innerHTML+="<p id='comment_para'>"+val+"</p>";
}
}

//singn in and sign up modal
var modal1 = document.getElementById("sign_up_modal");
var modal2 = document.getElementById("sign_in_modal");
var NAM = document.getElementById("nam");//Not a member
// Get the button that opens the modal
var btn1 = document.getElementById("up_modal");
var btn2 = document.getElementById("in_modal");
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
  
  // When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}
NAM.onclick = function() {
    modal1.style.display = "block";
  }
//onclicking scribber logo it leads to homepage
var home=document.getElementById("logo");
home.onclick=function(){
    window.location.href="../index.html";
}