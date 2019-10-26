<?php
// Step 0: Validation
use Ramsey\Uuid\Uuid;
$memberGuid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Members (memberGuid, firstName, lastName, dob, gender, isActive, email, mobilePhoneNum, positionTitle, stationNumber, radioNumber, address, city, state, zip)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);
$stmt->execute([
  $memberGuid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['isActive'],
  $_POST['email'],
  $_POST['mobilePhoneNum'],
  $_POST['positionTitle'],
  $_POST['stationNumber'],
  $_POST['radioNumber'],
  $_POST['address'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zip']
]);
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../members/');
