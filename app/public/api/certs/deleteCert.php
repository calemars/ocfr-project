<?php

$db = DbConnection::getConnection();

$stmt1 = $db->prepare(
  "delete from MemberCert where certificationGuid=?;"
);

$stmt1->execute([
  $_POST['certificationGuid']
]);

$stmt2 = $db->prepare(
  "delete from Certifications where certificationGuid=?;"
);

$stmt2->execute([
  $_POST['certificationGuid']
]);


$stmt = $db->prepare('SELECT * from Certifications;');
$stmt->execute();
$certifications = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certifications, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
