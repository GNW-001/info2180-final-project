<?php
$host = getenv('IP');
$username = 'lab7_user';
$password = 'P@rkdabus1';
$dbname = 'schema';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$user = $_POST['lemail'];
$user = filter_var($user, FILTER_SANITIZE_EMAIL);
$pass = $_POST['lpassword'];
$pass = strip_tags($pass);

session_start();

if (filter_var($user, FILTER_VALIDATE_EMAIL) && $pass != "") {
    $stmt = $conn->query("SELECT id, email, password FROM Users WHERE email = '%$user%';");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $pass = hash("sha256", $pass);
    if ($pass === $result['password']) {
        $_SESSION['user_id'] = $result['id'];
    }
}  

?>

<?php

$temp = $_GET['context'];
$context = strip_tags($temp2);
if($context == "nul") {
    $stmt = $conn->query("SELECT title, type, priority, status, created FROM Issues");
    $lists = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>

<?php if($context == "nul") : ?>
    <table style="width:100%">
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Status</th>
        <th>Assigned To</th>
         <th>Created</th>
      </tr>
      <?php foreach ($list as $row): ?>
      <tr>
        <td><?= $row['title']; ?></td>
        <td><?= $row['type']; ?></td>
        <td><?= $row['priority']; ?></td>
        <td><?= $row['status']; ?></td>
        <td><?= $row['created']; ?></td>
      </tr>
      <?php endforeach; ?>
    </table>
<?php endif; ?>