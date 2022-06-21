document.getElementById('login-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email')
    const userEmail= emailField.value;
     const passField=document.getElementById('user-password')
     const userPass=passField.value;

     if(userEmail=='abc@gmail.com' && userPass=="abc123")

     {
        window.location.href='banking.html'
        
     }
     else{
         alert('your email or password wrong')
     }
})

// deposit button work

