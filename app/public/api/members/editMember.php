<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  ''
);

$stmt->execute([
  $_POST['memberGuid'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['mobilePhoneNum'],
  $_POST['workPhoneNum']  // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
]);
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../employee/?personid='.$personid);
