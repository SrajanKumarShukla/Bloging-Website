//deletion of post
function delete_post(obj){
    var modal = document.getElementById("trash_modal");
    modal.style.display="block";
    
    var yes=document.getElementById("yes");
    var no=document.getElementById("no");
    yes.onclick=function(){
        obj.parentElement.parentElement.style.display="none";
        modal.style.display = "none";
    }
    no.onclick=function(){
        modal.style.display = "none";
    }
}

//on clicking the logo it leads to homepage
var home=document.getElementById("logo");
home.onclick=function(){
    window.location.href="../index.html";
}
var btn3 = document.getElementById("up_button");
btn3.onclick = function(){
    modal1.style.display = "block";
}