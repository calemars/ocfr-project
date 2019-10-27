<?php
// Step 0: Validation
use Ramsey\Uuid\Uuid;
$certGuid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Certifications (certificationGuid, certifyingAgency, certificationName, expPeriod)
  VALUES (?, ?, ?, ?)'
);
$stmt->execute([
  $certGuid,
  $_POST['certifyingAgency'],
  $_POST['certificationName'],
  $_POST['expPeriod']
]);


$stmt = $db->prepare('SELECT * from Certifications;');
$stmt->execute();
$certifications = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certifications, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
