
var click_next=document.querySelector(".next");
var click_back=document.querySelector(".back_page");
var click_submit=document.querySelector(".submit");
var click_main=document.querySelectorAll(".main");
var progress=document.querySelectorAll(".progress_bar li");

var eye=document.querySelector(".fa-eye-slash");
var pass=document.querySelector(".pass");
var seteye=document.querySelector(".fa-eye-slash");

let formnumber=0;

eye.addEventListener('click',function(){
if(pass.type=="password"){
pass.type="text";
seteye.classList.remove('fa-eye-slash');
seteye.classList.add('fa-eye');
}
else{
pass.type="password";
seteye.classList.add('fa-eye-slash');
seteye.classList.remove('fa-eye');
}
})

click_next.addEventListener('click',function(){
    
if(!validateform()){
return false;
}
formnumber++;
updateform();
progress_forward();
});

click_back.addEventListener('click',function(){
    
formnumber--; 
updateform();
progress_back();
});
 
click_submit.addEventListener('click',function(){
if(!validateform()){
return false; 
}
formnumber++;
updateform();        
});

function progress_forward(){
progress[formnumber].classList.add('active');
}
function progress_back(){
var back_p=formnumber+1;
progress[back_p].classList.remove('active');
}
function updateform(){ 
click_main.forEach(function(form){
form.classList.remove('active');
});
click_main[formnumber].classList.add('active');
progress_forward();
}
function validateform(){
var validate=true;
var inputs =document.querySelectorAll(".main.active input");
inputs.forEach(function(inpt){
inpt.classList.remove('warning');
if(inpt.hasAttribute("require")){
if(inpt.value.length=="0"){
validate =false;
inpt.classList.add('warning');
}
}
});
return validate;
}
