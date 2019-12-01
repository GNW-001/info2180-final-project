<?php
// You'd put this code at the top of any "protected" page you create

// Always start this first
session_start();

if ( isset( $_SESSION['id'] ) ) {
    // Grab user data from the database using the user_id
    // Let them access the "logged in only" pages
} else {
    // Redirect them to the login page
    $("#homeB").trigger("click");
}
?>


<html>
    <head>
    
        <meta charset="utf-8">
        <meta name="Resume" content="A resume of a software developer">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>GW - R</title>
      rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <script src="dynamic.js" type="text/javascript"></script>
    </head>
        
    <body>
        
        <header>
        <div class="flex-container">
            <div class="top-bar">
                <h1>BugMe Issue Tracker</h1>
            </div>
        </div>
        </header>
        <div class="grid-container">
            <div id="sidebar" class="grid-item1">
                <button type="button" id="homeB">Home</button>
                <button type="button" id="userB">Add User</button>
                <button type="button" id="issueB">New Issue</button>
                <button type="button" id="logoutB">Logout</button>
            </div>
            <div id="mainContent" class="grid-item2">
                <p>Main Content</p>
            </div>
        </div>
    </body>
</html>