    // Registration Timer

var countDownDate = new Date("Oct 16, 2025 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}, 1000)
 

    // Registration Form validation

    const message = document.getElementById("message");
    const password = document.getElementById("password");
    
    const submit = () => {
      const naMe = document.getElementById("name").value;
      const emaIl = document.getElementById("email").value;
      const phOne = document.getElementById("phone").value;
    
      message.style.display = "none";
    
      if (naMe.length == 0) {
        message.innerText = "Please enter your full name";
        message.style.display = "block";
        return false;
      } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaIl) == false) {
        message.innerText = "This email is not valid";
        message.style.display = "block";
        return false;
      } else if (password.value.length < 8) {
        message.innerText = "Password length must be greater than 8";
        message.style.display = "block";
        return false;
      } else if (phOne.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) == null) {
        message.innerText = "This number is wrong";
        message.style.display = "block";
        return false;
      }
      alert("Youe registerd!!!")
      return false;
    };
    
    function show() {
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    }
