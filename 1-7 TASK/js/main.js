
let form=document.getElementById("form")
let uName=document.getElementById("uname")
let emailId=document.getElementById("email")
let Password=document.getElementById("password")
let error=document.getElementsByClassName("error")
// console.log(form,uname,email,password,error)
form.addEventListener("submit",function(e){
	e.preventDefault();
	
	test(uName,0,'uname blank')
	test(emailId,1,'this blank')
	test(Password,2,'blank')
	
	// console.log("submit")
})

let test=function(id,serial,msg){
	    if(id.value.trim()==""){
			// alert("msg")
			// console.log("msg")
			error[serial].innerHTML=msg;
			id.style.border="2px solid red";
		}
		
		else{
			// alert("signin")
			error[serial].innerHTML="";
			id.style.border="2px solid green";
			update()
		}
}
   function update(){
	   if(uName.value&&emailId.value&&Password.value){
	   localStorage.setItem("I.name",JSON.stringify(uName.value))
	   localStorage.setItem("I.email",JSON.stringify(emailId.value))
	   localStorage.setItem("I.Password",JSON.stringify(Password.value))
	   location.href="login/log.html";
	   }
   }
	 