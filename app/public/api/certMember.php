<?php
// Step 1: Get a datase connection from our help class

$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare("SELECT c.*, m.firstName, m.lastName
FROM Members as m, Certifications as c, MemberCert as mc
where c.certificationGuid=mc.certificationGuid and m.memberGuid=mc.memberGuid and m.memberGuid=? ;");

$stmt->execute([
  $_POST['memberGuid']
]);
$members = $stmt->fetchAll();
// Step 3: Convert to JSON

$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
echo $json;
