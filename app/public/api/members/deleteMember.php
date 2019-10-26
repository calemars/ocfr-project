<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  "delete from Members where memberGuid=?;"
);

$stmt->execute([
  $_POST['memberGuid']
]);
// Step 4: Output
//header('HTTP/1.1 303 See Other');
//header('Location: ../employee/?personid='.$personid);
