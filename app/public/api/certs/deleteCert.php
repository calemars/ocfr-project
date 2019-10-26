<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  "delete from Certifications where certificationGuid=?;"
);

$stmt->execute([
  $_POST['certificationGuid']
]);
// Step 4: Output
//header('HTTP/1.1 303 See Other');
//header('Location: ../employee/?personid='.$personid);
