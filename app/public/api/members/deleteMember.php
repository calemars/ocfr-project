<?php

$db = DbConnection::getConnection();

$stmt1 = $db->prepare(
  "delete from MemberCert where memberGuid=?;"
);

$stmt1->execute([
  $_POST['memberGuid']
]);

$stmt2 = $db->prepare(
  "delete from Members where memberGuid=?;"
);

$stmt2->execute([
  $_POST['memberGuid']
]);

$stmt = $db->prepare('SELECT * from Members;');
$stmt->execute();
$members = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
