<?php
// Step 0: Validation
use Ramsey\Uuid\Uuid;
$memberGuid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO MemberCert (memberGuid, certificationGuid, certExpDate)
  VALUES (?, ?, ?)'
);
$stmt->execute([
  $_POST['memberGuid'],
  $_POST['certificationGuid'],
  $_POST['certExpDate']
]);


$stmt = $db->prepare("SELECT m.*, c.certificationName, mc.certExpDate, c.certificationGuid
FROM Members as m, Certifications as c, MemberCert as mc
where c.certificationGuid=mc.certificationGuid and m.memberGuid=mc.memberGuid;");
$stmt->execute();
$members = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
