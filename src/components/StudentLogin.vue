<template>
<div class="test">
           
<form @submit.prevent="submitLogin" >
  <div class="imgcontainer">
      <h1 align="center">Candidate Login!</h1> 
    <img src="@/assets/student.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
      
    <label for="uname"><b>Symbol No</b></label>
    <input type="text" placeholder="Enter Symbol no" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <span>Please enter the username and password provided to you!!!</span> 
      <router-link to="/studentlogin/question" tag="button">Login</router-link>
    <button type="reset" class="resetbtn">Reset</button>  
  
  </div>
</form>
  </div>

</template>
<script>
export default {
    
  
}
</script>



<style>

body {font-family: Arial, Helvetica,
 sans-serif;}
form {

  border: 1px solid #0D47A1;
  background-color: lightsteelblue;
  display: block;
  width:100%;
  height:100%;
}

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    cursor: pointer;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color:white;
}

button {
    background-color: #0D47A1;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.resetbtn {
    width:auto;
    padding: 10px 18px;
    background-color: #f44336;
}

.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

img.avatar {
    
    width:10%;
    border-radius: 50%;
}

.container {
    width: 100%;
    height: 100%;
    max-width:auto;
    cursor: pointer;
    
    
}


/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .resetbtn {
       width: 100%;
    }
}
</style>