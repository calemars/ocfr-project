<?php
// Step 1: Get a datase connection from our help class

$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare("SELECT m.*
FROM Members as m, Certifications as c, MemberCert as mc
where c.certificationGuid=mc.certificationGuid and m.memberGuid=mc.memberGuid and c.certificationGuid=? ;");

$stmt->execute([
  $_POST['certificationGuid']
]);
$members = $stmt->fetchAll();
// Step 3: Convert to JSON

$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
echo $json;
