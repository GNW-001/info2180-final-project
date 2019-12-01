<?php
// You'd put this code at the top of any "protected" page you create

// Always start this first
session_start();

if ( isset( $_SESSION['id'] ) ) {
    // Grab user data from the database using the user_id
    // Let them access the "logged in only" pages
} else {
    // Redirect them to the login page
    echo "<script> loadHome(); </script>";
}
?>


<html>
    <head>
    
        <meta charset="utf-8">
        <meta name="VW" content="Buggy">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>GW - R</title>
        <link rel="stylesheet" href="style.css">
        <script src="dynamic.js" type="text/javascript"></script>
        <link href="https://fonts.googleapis.com/css?family=Rajdhani&display=swap" rel="stylesheet">
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
                <p id="log">Logged in as <?= $_SESSION['name']?></p>
            </div>
            <div id="mainContent" class="grid-item2">
                <p>BugMe Issue Tracker is a simple issue tracking app that allows software development
team members to log new feature proposals, tasks or bugs for a web app that they are
currently working on. <br><br>Please select an opton provided by the menu to the left to proceed.</p>
            </div>
        </div>
    </body>
</html>