let loginbtn=document.getElementById("login_btn");
let SignupPage=document.getElementById("signup");
let LoginPage=document.getElementById("login");
let signupbttn=document.getElementById("signupbtn");


let signupbtn=document.getElementById("signup_btn");


loginbtn.addEventListener('click',(e) =>{
    SignupPage.style.display='none';
    LoginPage.style.display='block';
})

signupbtn.addEventListener('click',(e) =>{
    SignupPage.style.display='block';
    LoginPage.style.display='none';
})
signupbtn.addEventListener('click',(e) =>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

  if (localStorage.getItem(email)===password){
    alert("User registered already");
    return;

  }
  localStorage.setItem(email,password);
  alert("New user registered");

})