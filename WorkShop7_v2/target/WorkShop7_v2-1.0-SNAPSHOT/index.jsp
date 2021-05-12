<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="jquery.js"></script>
    <script src="./functions.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!--
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    -->
    <!--
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <a name="Top"></a>


    <link rel="stylesheet" href="./index.css" type="text/css">
    <title>Login</title>
</head>
<body style="background-image: url('image/vacation.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
<script>

    function btnLogin()
    {
        var text = document.getElementById("text");
        var password = document.getElementById("password");

        if (text.value=="group1" && password.value=="123")
        {
            //Login as Hardcoded User
            alert("Login Successful")
            window.location.href="customerManagement.html"
            return;
        }
        else {
            alert("invalid username or password")
        }
    }

</script>
<%--<a href="customerManagement.html">Customer Management</a>--%>
<div class = "LargeContainer">


    <div class="container" style="margin-top: 5%; border-radius: 25px;padding-top: 2%; padding-bottom: 3%;margin-left: auto; margin-right: auto">
        <h1 style = "margin-bottom: 2%; text-align: center"> Welcome to Travel Expert</h1>
        <h2 style = "margin-bottom: 2%; text-align: center">Please Login</h2>
        <br />
                <div class = "UsernamePassword" style ="text-align: center">
                        <input id = "text" class="text" placeholder="Enter Username" name="uname" required style = "border-radius: 4px;padding: 12px 20px;box-sizing: border-box">
                        <br/>
                        <br/>
                        <br/>
                        <input type="password" id = "password" class="password" placeholder="Enter Password" name="psw" required style = "border-radius: 4px;padding: 12px 20px;box-sizing: border-box">
                        <br/>
                        <br/>

                    <button type="submit" onclick="btnLogin()" class="loginbtn"><b>Login</b></button>

                </br></br>


                    <input type="checkbox" checked="checked" name="remember" style= "border-radius: 4px;padding: 12px 20px;box-sizing: border-box; color: white"><label><b>Remember me</b></label>

                </div>
            </div>
        </div>

</div>
</body>
</html>