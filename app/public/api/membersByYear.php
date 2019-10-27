<?php



// Step 1: Get a datase connection from our help class

$db = DbConnection::getConnection();
// Step 2: Create & run the query
//$stmt = $db->prepare("SELECT concat(firstName, ' ', lastName) as fullName, radioNumber, stationNumber, email, mobilePhoneNum FROM Members ORDER BY stationNumber;");
$stmt = $db->prepare("SELECT concat(firstName, ' ', lastName) as fullName, radioNumber, stationNumber, email, mobilePhoneNum, TIMESTAMPDIFF(YEAR, dateJoined, CURDATE()) AS difference FROM Members ORDER BY difference desc;");
$stmt->execute();
$reports = $stmt->fetchAll();
// Step 3: Convert to JSON

$json = json_encode($reports, JSON_PRETTY_PRINT);
// Step 4: Output

header('Content-Type: application/json');

echo $json;
