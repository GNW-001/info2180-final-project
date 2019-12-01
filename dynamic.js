window.addEventListener('DOMContentLoaded', (event) => {
    let buttonH = document.getElementById("homeB");
    let buttonU = document.getElementById("userB");
    let buttonI = document.getElementById("issueB");
    let buttonL = document.getElementById("logoutB");
    buttonU.addEventListener('click', loadAddUser);
    buttonL.addEventListener('click', loadLogin);
    buttonI.addEventListener('click', loadCreateIssue);

});

function loadHome() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        document.getElementById("mainContent").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:8080/request.php"+"?"+"context=nul", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}

function loadCreateIssue() {
    document.getElementById("mainContent").innerHTML = '<h1>New User</h1><form action="/request.php" method= "post">Title: <input type="text" name="title" placeholder="Title"><br>Description: <input type="text" name="description" placeholder="Description"><br>Assigned To: <select id="assigned"></select><br>Type: <select name= "type"><option value="Bug">Bug</option><option value="Proposal">Proposal</option><option value="Task">Task</option></select><br>Priority: <select name= "priority"><option value="Major">Major</option><option value="Minor">Minor</option><option value="Critical">Critical</option></select><br><input type="submit" value="Submit"></form>';
}


function loadLogin() {
    document.getElementById("mainContent").innerHTML = '<h1>Login</h1><form action="/request.php" method= "post">Email: <input type="text" name="lemail" placeholder="Email"><br>Password: <input type="password" name="lpassword" placeholder="Password"><br><input type="submit" value="Submit"></form>';
}

function loadAddUser() {
    document.getElementById("mainContent").innerHTML = '<h1>New User</h1><form action="/request.php" method= "post">Firstname: <input type="text" name="fname" placeholder="Firstname"><br>Lastname: <input type="text" name="lname" placeholder="Lastname"><br>Password: <input type="password" pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" name="password" placeholder="Password"><br>Email: <input type="email" name="email" placeholder="Email"><br><input type="submit" value="Submit"></form>';
}

function checkPass(pass) {
    var rg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
    if (rg.test(pass)) {
        Alert("valid");
    } else {
        Alert("invalid");
    }
}
