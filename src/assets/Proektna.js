let isLiked = false;

function toggleLike() {
    isLiked = !isLiked;
    const likeButton = document.querySelector('.like-button');
    likeButton.classList.toggle('liked', isLiked);
}


window.onload=function(){
var profilna=document.getElementById("profilnakopce");
var close=document.getElementById("closebtn");
var najava=document.getElementById("najava");
var najavakopce=document.getElementById("login");
var ime=document.getElementById("username");
var lozinka=document.getElementById("password");
var profil=document.getElementById("div3");
var warning=document.getElementById("namewarning");
var warning1=document.getElementById("passwarning");
var odjava=document.getElementById("odjavise");
var odjava1=document.getElementById("odjaviDIV");
odjava1.style.visibility='hidden';
najavakopce.onclick=login;

odjava.onclick=function(){
    profilna.disabled=false;
    profil.textContent='Профил';
    odjava1.style.visibility='hidden';
}
close.onclick=closeNav;
profilna.onclick=openNav;
function proverka()
{
    return /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$)/.test(lozinka.value);
}
function login()
{
    
    if(!ime.value==""&&!/\s/.test(ime.value)&&proverka())
{
    profil.textContent=ime.value;
    
    warning1.style.color="transparent";
    warning.style.color="transparent";
    closeNav();
    profilna.disabled=true;
    odjava1.style.visibility='visible';
}
else if(!proverka()){
    warning1.style.color="red";
}
if(ime.value==""||/\s/.test(ime.value))
{
    warning.style.color="red";
}
}
function openNav()
{
    najava.style.width="250px";
    najava.style.backgroundColor="white";
    document.getElementById("main").style.marginRight = "250px";
  
}
function closeNav()
{
    
    najava.style.width="0px";
    najava.style.backgroundColor="transparent";
    document.getElementById("main").style.marginRight = "0px";
    document.getElementById("main").style.backgroundColor = "white";
}


}

