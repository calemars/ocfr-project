<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  "update Members set firstName=?, lastName=?, dob=?, gender=?, isActive=?, email=?, mobilePhoneNum=?, positionTitle=?, stationNumber=?, radioNumber=?, address=?, city=?, state=?, zip=?, dateJoined=? where memberGuid=?;"
);

$stmt->execute([
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
  $_POST['zip'],
  $_POST['dateJoined'],
  $_POST['memberGuid']
]);
// Step 4: Output
//header('HTTP/1.1 303 See Other');
//header('Location: ../employee/?personid='.$personid);
