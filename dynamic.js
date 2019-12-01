window.addEventListener('DOMContentLoaded', (event) => {
    let buttonH = document.getElementById("homeB");
    let buttonU = document.getElementById("userB");
    let buttonI = document.getElementById("issueB");
    let buttonL = document.getElementById("logoutB");
    buttonH.addEventListener('click', loadHome);
    buttonU.addEventListener('click', loadAddUser);
    buttonL.addEventListener('click', loadLogin);
    buttonI.addEventListener('click', loadCreateIssue);

});

function loadHome() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        document.getElementById("mainContent").innerHTML = result;
        }
    };
    xhttp.open("GET", "./request.php"+"?"+"context=nul", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}

function loadO() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        document.getElementById("mainContent").innerHTML = result;
        }
    };
    xhttp.open("GET", "./request.php"+"?"+"context=Open", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}

function loadM() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        document.getElementById("mainContent").innerHTML = result;
        }
    };
    xhttp.open("GET", "./request.php"+"?"+"context=mine", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}



function linkPress(id) {
    var xhttp = new XMLHttpRequest();
    var idee = id;
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        document.getElementById("mainContent").innerHTML = result;
        }
    }; 
    xhttp.open("GET", "./request.php"+"?"+"context="+idee, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}

function loadCreateIssue() {
    document.getElementById("mainContent").innerHTML = '<h1>New User</h1><form action="/request.php" method= "post">Title: <input type="text" name="title" placeholder="Title" required><br>Description: <input type="text" name="description" placeholder="Description" required><br>Assigned To: <select name= "assigned" id="assignedTo"></select><br>Type: <select name= "type"><option value="Bug">Bug</option><option value="Proposal">Proposal</option><option value="Task">Task</option></select><br>Priority: <select name= "priority"><option value="Major">Major</option><option value="Minor">Minor</option><option value="Critical">Critical</option></select><br><input type="submit" value="Submit"></form>';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        document.getElementById("assignedTo").innerHTML = result;
        }
    };
    xhttp.open("GET", "./request.php"+"?"+"context=users", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}


function loadLogin() {
    document.getElementById("mainContent").innerHTML = '<h1>Login</h1><form action="/request.php" method= "post">Email: <input type="text" name="lemail" placeholder="Email" required><br>Password: <input type="password" name="lpassword" placeholder="Password" required><br><input type="submit" value="Submit"></form>';
    destroy_session();
}

function loadAddUser() {
    document.getElementById("mainContent").innerHTML = '<h1>New User</h1><form action="/request.php" method= "post">Firstname: <input type="text" name="fname" placeholder="Firstname" required><br>Lastname: <input type="text" name="lname" placeholder="Lastname" required><br>Password: <input type="password" pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password" placeholder="Password" required><br>Email: <input type="email" name="email" placeholder="Email" required><br><input type="submit" value="Submit"></form>';
}

function destroy_session(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
       if (this.readyState == 4 && this.status == 200) {
            alert(xmlhttp.responseText);
       }
    };
    xmlhttp.open('GET','./request.php'+"?context=des", true);
    xmlhttp.send(null);
    document.getElementById("log").innerHTML = 'Logged out';
}

function markClosed(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        alert('Closed');
        }
    };
    xhttp.open("GET", "./request.php"+"?"+"context=mClosed&num="+id, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}

function markInProg(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        alert('In Progress');
        }
    };
    xhttp.open("GET", "./request.php"+"?"+"context=mInProg&num="+id, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}
