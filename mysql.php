<html>
 <head>
  <title>MySQL connection</title>
 </head>
 <body>
 <?php 
$servername = "localhost";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$conn->close();
 ?> 
 </body>
</html>