
// function myFunction(){
//     $usernname = document.getElementById('username');
//     $password = document.getElementById('password');
//     if($usernname.value == ""){
//         alert("Input your username");
//     }
//     else if($password.value == ""){
//         alert("Input your password");
//     }
//     else{
//         alert("Sign in successfully");
//     }
//     console.log($usernname.value);
//     console.log($password.value);
// };
$(document).ready(function(){
    $("#sign-in").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        if(username == ""){
            alert("Input your username");
        }
        else if(password == ""){
            alert("Input your password");
        }
        else {
            alert("Sign in successfully");
        }
        console.log(username);
        console.log(password);
    });
});

