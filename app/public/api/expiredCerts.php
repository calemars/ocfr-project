<?php



// Step 1: Get a datase connection from our help class

$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare('SELECT m.firstName, m.lastName, c.certificationName, mc.certExpDate, m.stationNumber, m.radioNumber, m.email
                      FROM Members as m, MemberCert as mc, Certifications as c
                      WHERE m.memberGuid = mc.memberGuid AND mc.certificationGuid = c.certificationGuid and mc.certExpDate < NOW();');
$stmt->execute();
$reports = $stmt->fetchAll();
// Step 3: Convert to JSON

$json = json_encode($reports, JSON_PRETTY_PRINT);
// Step 4: Output

header('Content-Type: application/json');

echo $json;
