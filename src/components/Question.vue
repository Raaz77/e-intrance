<template>
   <div class="body" > 
       
<div class="question">
    <h1>Question here</h1>
  
   

</div>
<div class="timer">
<div class="timerheader">
    <h1>
        Exam finishes in <span id="time">180:00</span> minutes!</h1></div>
        <br>
       <router-link to="/result" tag="Submit">Submit</router-link>
    </div>
   </div>
</template>


<script>
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var timeMinutes = 60 * 180,
        display = document.querySelector('#time');
    startTimer(timeMinutes, display);
};
		</script>


<style>
.question{
    width:700px;
    height:500px;
    background-color:lightsteelblue;
    float:left;

}

.timer{
    margin-left: 5px;
    width: 250px;
    height: 500px;
    background-color: lightsteelblue;
    float: left;
}
.timerheader
{
    text-align: center;
}
submit {
    background-color: #0D47A1;
    color: white;
    padding: 15px 100px;
    margin-top: 200px;
    border: none;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
}
submit:hover {
    opacity: 0.8;
}
</style>
