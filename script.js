console.log("This is Rajendra Youtube-Clone")
var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");
menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}